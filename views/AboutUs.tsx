import { Box } from "@mui/joy";
import Image from "next/image";

import Description from "components/Description";
import Title from "components/Title";
import Wrapper from "components/Wrapper";
import MainLayout from "layouts/MainLayout";

const AboutUs = () => {
  return (
    <Wrapper px={[2, 2, 2, 0]}>
      <Title
        component="div"
        sx={{
          fontSize: (theme) => [
            theme.vars.fontSize.xl,
            theme.vars.fontSize.xl3,
            theme.vars.fontSize.xl4,
          ],
          textAlign: "left",
          mb: 5,
        }}
      >
        О нас
      </Title>

      <Description mb={5} sx={{ textAlign: "justify" }}>
        <strong>КА МО «Закон и Человек»</strong> <br />
        <br />
        Правозащитники из «Закон и Человек» — личные помощники, партнеры,
        которые пройдут с вами сложный путь: от консультирования до завершения
        судебных этапов, моментально вступают в дело на любом этапе, помогая
        найти выход из патовых ситуаций. Правозащитники готовы молниеносно
        изучить ситуацию, предложить несколько вариантов решения, выступить
        медиаторами или представителями в суде. Персональный подход к клиенту.
        Мы не работаем по шаблонам, вникаем в обстоятельства, проводим глубокий
        аудит документов. С вами будет работать персональный юрист, который
        имеет большой опыт в конкретной сфере права. Мы не даем ложных обещаний,
        сразу озвучиваем перспективу по делу, применяем все законные
        инструменты. <br />
      </Description>

      <Box
        height={[240, 350]}
        width={[250, 360]}
        my={5}
        position="relative"
        mx="auto"
      >
        <Image src="/new-logo.png" alt="logo" layout="fill" />
      </Box>

      <Description mb={5}>
        {`"ЮРИСТ ДОЛЖЕН БЫТЬ ЧЕСТНЫМ ПО НАТУРЕ, А НЕ ПО ОБСТОЯТЕЛЬСТВАМ."`}
        <br />
      </Description>

      <Description sx={{ fontSize: 14, mb: 4 }} component="i">
        Сироты обслуживаются совершенно бесплатно. Пенсионерам — оказание
        юридической помощи со скидкой в 50%.
      </Description>
    </Wrapper>
  );
};

AboutUs.getLayout = (page: React.ReactElement) => (
  <MainLayout>{page}</MainLayout>
);

export default AboutUs;
