import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import React, { useEffect, useState } from 'react';
import ModalProducts from "./components/apiModal/ModalProducts";
import ReviewForm from "./components/reviewForm/ReviewForm";


const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  
 
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${inter.className}`}>
        <ModalProducts></ModalProducts>
        <ReviewForm></ReviewForm>
      </main>
    </>
  );
}
