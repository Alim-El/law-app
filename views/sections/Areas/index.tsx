import "aos/dist/aos.css";
import { useEffect } from "react";
import { Box } from "@mui/joy";
import AOS from "aos";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import { BookIcon, BuildingIcon, WebIcon } from "assets/img";
import Description from "components/Description";
import Title from "components/Title";
import Wrapper from "components/Wrapper";

import AreaItem from "./AreaItem";

const areas = [
  {
    icon: <WebIcon />,
    title: "Интеллектуальная собственность",
    description:
      "Право интеллектуальной собственности имеет дело с законами о защите создателей и владельцев изобретений, письменных работ, музыки, дизайна и других произведений.",
  },

  {
    icon: <BuildingIcon />,
    title: "Недвижимость",
    description:
      "Право недвижимости - это отрасль гражданского права, которая охватывает право владения, пользования и пользования землей.",
  },

  {
    icon: <BookIcon />,
    title: "Налоговое право",
    description:
      "Налоговое законодательство охватывает подоходный, корпоративный, акцизный, налог на роскошь, налог на имущество и другие виды налогов.",
  },
];

const AreasSection = () => {
  useEffect(() => {
    AOS.init({ delay: 50, duration: 1200 });
    AOS.refresh();
  }, []);

  return (
    <Wrapper id="areas" py={[10, 20]}>
      <Title>Сфера деятельности</Title>

      <Description pt={3} width={["auto", 600]}>
        Наш дисциплинированный подход к решению ваших юридических вопросов
        приведет к наилучшему возможному результату.
      </Description>

      <Box
        sx={{
          display: ["none", "flex"],
          width: "100%",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 10,
        }}
      >
        {areas.map((props) => (
          <AreaItem key={props.title} animated={true} {...props} />
        ))}
      </Box>

      <Box display={["flex", "none"]} height="100%">
        <Swiper
          pagination={true}
          modules={[Pagination]}
          className="mySwiper"
          style={{ height: "100%", paddingBottom: 50 }}
        >
          {areas.map((props) => (
            <SwiperSlide key={props.title}>
              <AreaItem animated={false} {...props} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
    </Wrapper>
  );
};

export default AreasSection;
