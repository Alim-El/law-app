import "aos/dist/aos.css";
import { useEffect } from "react";
import { Stack } from "@mui/joy";
import AOS from "aos";

import { BookIcon, BuildingIcon, WebIcon } from "assets/img";
import Description from "components/Description";
import Title from "components/Title";
import Wrapper from "components/Wrapper";

import AreaItem from "./AreaItem";

const AreasSection = () => {
  useEffect(() => {
    AOS.init({ delay: 50, duration: 1200 });
    AOS.refresh();
  }, []);

  return (
    <Wrapper id="areas" py={[0, 10, 20]}>
      <Title>Сфера деятельности</Title>

      <Description pt={3} width={["auto", 600]}>
        Наш дисциплинированный подход к решению ваших юридических вопросов
        приведет к наилучшему возможному результату.
      </Description>

      <Stack
        direction="row"
        sx={{
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
          px: {
            mobile: 5,
          },
        }}
      >
        <AreaItem
          icon={<WebIcon />}
          title="Интеллектуальная собственность"
          description="Право интеллектуальной собственности имеет дело с законами о защите создателей и владельцев изобретений, письменных работ, музыки, дизайна и других произведений."
        />

        <AreaItem
          icon={<BuildingIcon />}
          title="Недвижимость"
          description="Право недвижимости - это отрасль гражданского права, которая охватывает право владения, пользования и пользования землей."
        />

        <AreaItem
          icon={<BookIcon />}
          title="Налоговое право"
          description="Налоговое законодательство охватывает подоходный, корпоративный, акцизный, налог на роскошь, налог на имущество и другие виды налогов."
        />
      </Stack>
    </Wrapper>
  );
};

export default AreasSection;
