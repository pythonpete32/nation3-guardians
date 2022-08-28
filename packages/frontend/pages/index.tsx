import { Grid, Container, Input, Link } from "@nextui-org/react";
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Layout } from "./Layout";
import { MockItem } from "../components/mockItem/MockItem";
import { Navigation } from "../components/navigation/Navigation";
import { Footer } from "../components/footer/Footer";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nation3 Guardians</title>
        <meta
          name="Nation3 Guardians"
          content="Test for own rolled signature aggregation api"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navigation />
      <Layout>
        <Grid.Container gap={4} justify="center">
          <Grid xs={4}>
            <MockItem title="Case6" isActive={true} />
          </Grid>
          <Grid xs={4}>
            <MockItem title="Case5" isActive={false} />
          </Grid>
          <Grid xs={4}>
            <MockItem title="Case4" isActive={false} />
          </Grid>
          <Grid xs={4}>
            <MockItem title="Case3" isActive={false} />
          </Grid>
          <Grid xs={4}>
            <MockItem title="Case2" isActive={false} />
          </Grid>
          <Grid xs={4}>
            <MockItem title="Case1" isActive={false} />
          </Grid>
        </Grid.Container>
      </Layout>

      <Footer />
    </div>
  );
};

export default Home;
