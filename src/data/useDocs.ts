import { useCallback, useEffect, useRef } from "react";
import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import useSWR, { Middleware } from "swr";

import { Article } from "types";
import { db } from "utils/firebase";

// Это ППО SWR для хранения данных даже при изменении ключа.
const laggy: Middleware = (useSWRNext) => {
  return (key, fetcher, config) => {
    // Используйте ссылку для хранения ранее возвращённых данных.
    const laggyDataRef = useRef<any>();

    // Фактический хук SWR.
    const swr = useSWRNext(key, fetcher, config);

    useEffect(() => {
      // Обновите ссылку если данные определены.
      if (swr.data !== undefined) {
        laggyDataRef.current = swr.data;
      }
    }, [swr.data]);

    // Предоставьте метод очистки запаздывающих данных, если таковые имеются.
    const resetLaggy = useCallback(() => {
      laggyDataRef.current = undefined;
    }, []);

    // Возврат к предыдущим данным, если текущие данные не определены.
    const dataOrLaggyData =
      swr.data === undefined ? laggyDataRef.current : swr.data;

    // Показывает предыдущие данные?
    const isLagging =
      swr.data === undefined && laggyDataRef.current !== undefined;

    // Также добавьте поле `isLagging` в SWR.
    return Object.assign({}, swr, {
      data: dataOrLaggyData,
      isLagging,
      resetLaggy,
    });
  };
};

type Data = { docs: Array<Article>; total: number };

const useDocs = (path: string, count: number, fallbackData: Data) => {
  const hasMounted = useRef(false);

  useEffect(() => {
    hasMounted.current = true;
  }, []);

  const { data, ...other } = useSWR<Data>(
    [path, count],
    async (path, ...other) => {
      console.log(path, other, fallbackData);

      const articlesRef = collection(db, path);
      const q = query(articlesRef, orderBy("date", "desc"), limit(count));
      const querySnapshot = await getDocs(q);

      return {
        docs: querySnapshot.docs.map((rec) => ({
          id: rec.id,
          ...rec.data(),
        })) as Article[],
        total: await (await getDocs(articlesRef)).size,
      };
    },
    {
      fallbackData: hasMounted.current ? undefined : fallbackData,
      use: [laggy],
    }
  );

  return {
    data: data || {
      docs: [],
      total: 0,
    },
    ...other,
  };
};

export default useDocs;
