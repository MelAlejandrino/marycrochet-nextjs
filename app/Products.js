// ProductsList.js
import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Skeleton from '@components/Skeleton';
import Loading from '@components/Loading';
import { fetchProducts } from './api';
import {useStore} from './state';

export default function ProductsList() {
  // const [products, setProducts] = useState([]);
  const { products, setProducts } = useStore();
  const [isLoadingInitial, setLoadingInitial] = useState(true);
  const [isLoadingMore, setLoadingMore] = useState(false);
  const [nextPage, setNextPage] = useState(null);
  const containerRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    async function getProducts() {
      const FIELDS="id,message,permalink_url,reactions.summary(true),full_picture,created_time"
      const initialUrl = `https://graph.facebook.com/v17.0/me/feed?access_token=${process.env.ACCESS_TOKEN}&fields=${FIELDS}`;
      const { data, nextPage: next } = await fetchProducts(initialUrl);
      setProducts(data);
      setNextPage(next);
      setLoadingInitial(false);
    }

    getProducts();
  }, []);

  useEffect(() => {
    function handleScroll() {
      if (
        containerRef.current &&
        window.innerHeight + window.scrollY >= containerRef.current.offsetHeight &&
        nextPage &&
        !isLoadingMore
      ) {
        loadMore();
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [nextPage, isLoadingMore]);

  async function loadMore() {
    setLoadingMore(true);
    const { data: newData, nextPage: newNextPage } = await fetchProducts(nextPage);
    setProducts([...products, ...newData]);
    setNextPage(newNextPage);
    setLoadingMore(false);
  }

  if (isLoadingInitial) {
    return <Skeleton />;
  }

  function handleClickItem(item){
    router.push(`/${item}`);
  }

  return (
    <>
      <div ref={containerRef} className='gallery-container grid'>
        {products.map((item) => {
          return (
            <picture key={item.full_picture} data-key={item.id} onClick={() => handleClickItem(item.id)}>
              <Image
                src={item.full_picture}
                alt={item.message}
                width={900}
                height={720}
                loading={item.isAboveTheFold ? 'eager' : 'lazy'}
                quality={30}
              />
            </picture>
          );
        })}
      </div>
      <div className='container-rotatingline'>
        {isLoadingMore && <Loading />}
      </div>
    </>
  );
}
