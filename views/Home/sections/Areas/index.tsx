import "aos/dist/aos.css";
import { useEffect } from "react";
import GavelIcon from "@mui/icons-material/Gavel";
import ReceiptIcon from "@mui/icons-material/Receipt";
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
    description: `— Предоставление правовых консультаций по различным юридическим вопросам;
— Подготовка исковых заявлений, ходатайств, жалоб, обращений, запросов, требований и других юридических документов;
— Представление интересов клиентов во всех судебных и правоохранительных учреждениях при разбирательствах административных, гражданских и уголовных дел;`,
  },

  {
    icon: <SupportAgentIcon sx={sx} />,
    title:
      "Абонентное юридическое обслуживание бизнеса с личным юристом и бухгалтером:",
    description: `— Абонентное юридическое обслуживание бизнеса с личным юристом и бухгалтером;
— Страховые споры - защита прав при ДТП;
— Сопровождение исполнительного производства;
— Банкротство юридических и физических лиц;
— Услуги по миграционным делам;`,
  },

  {
    icon: <ReceiptIcon sx={sx} />,
    title: "Налоговое сопровождение:",
    description: `— Сопровождение и помощь в разрешении возникших проблем в налоговом органе;
— Сопровождение, выработка стратегии и защита при проведении налоговых проверок на всех ее этапах;
— Снижение налоговых рисков, структурирование бизнеса;`,
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
