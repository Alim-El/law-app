import "aos/dist/aos.css";
import { useEffect } from "react";
import CarCrashIcon from "@mui/icons-material/CarCrash";
import GavelIcon from "@mui/icons-material/Gavel";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { Box } from "@mui/joy";
import AOS from "aos";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import Description from "components/Description";
import Title from "components/Title";
import Wrapper from "components/Wrapper";

import AreaItem from "./AreaItem";

const sx = { width: 50, height: 50, fill: "#00486D" };

const areas = [
  {
    icon: <GavelIcon sx={sx} />,
    title: "Полный спектр правовых инструментов для защиты клиентов:",
    description: `—  Предоставление правовых консультаций по различным юридическим вопросам;
—  Подготовка исковых заявлений, ходатайств, жалоб, обращений, запросов, требований и других юридических документов;
—  Представление интересов граждан во всех судебных и правоохранительных учреждениях при разбирательствах административных, гражданских и уголовных дел;`,
  },

  {
    icon: <SupportAgentIcon sx={sx} />,
    title:
      "Абонентное юридическое обслуживание бизнеса с личным юристом и бухгалтером:",
    description: `— Подбираем индивидуальный тариф для Ваших юридических потребностей;
— При необходимости выезжаем к своим клиентам в течение часа;
— Регулярная отчетность о проделанной юридической работе;`,
  },

  {
    icon: <CarCrashIcon sx={sx} />,
    title: "Страховые споры - защита прав при ДТП:",
    description: `— Ведение дела по ДТП с пострадавшими;	
— Ведение дела по ДТП со смертельным исходом;	
— Ведение дела по ДТП с наездом на пешехода;`,
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
