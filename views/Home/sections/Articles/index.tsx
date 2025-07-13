// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { useEffect, useState } from "react";
import DocItem from "@components/DocItem";
import { Box, Button, CircularProgress, useTheme } from "@mui/joy";
import { useMediaQuery } from "@mui/material";
// import required modules
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Title from "components/Title";
import Wrapper from "components/Wrapper";
import { Article } from "types";
import { getArticles } from "utils/firebase";

const Articles = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [data, setData] = useState<{ articles: Article[]; total: number }>({
    articles: [],
    total: 0,
  });
  const [limit, setLimit] = useState(3);
  const [loading, setLoading] = useState(false);

  const { articles, total } = data;

  const handeClickLoad = () => {
    setLoading(true);

    if (limit < total) {
      setLimit(limit + 3);
    }
  };

  useEffect(() => {
    getArticles(limit, "articles").then((data) => {
      setData(data);
      setLoading(false);
    });
  }, [limit]);

  return (
    <Wrapper id="articles" py={[10, 20]}>
      <Title component="div">Последние статьи</Title>

      <Box
        sx={{
          display: ["none", "flex"],
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mt: 6.25,
          mb: 10,
        }}
      >
        {articles.map((props) => (
          <DocItem path="articles" animated={true} key={props.id} {...props} />
        ))}
      </Box>

      <Box display={["flex", "none"]} height="100%" mt={6.25}>
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          style={{ height: "100%", paddingBottom: 50 }}
        >
          {articles.map((props) => (
            <SwiperSlide key={props.id}>
              <DocItem path="articles" animated={false} {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>

      {!isMobile && limit < total && (
        <Button onClick={handeClickLoad} variant="plain">
          {loading ? <CircularProgress /> : "Загрузить еще..."}
        </Button>
      )}
    </Wrapper>
  );
};

export default Articles;
