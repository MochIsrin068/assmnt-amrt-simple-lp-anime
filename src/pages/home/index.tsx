import React from "react";
import ButtonBackToTop from "../../components/ButtonBackToTop";
import Header from "../../components/Header";
import InputSearch from "../../components/InputSearch";
import Loader from "../../components/Loader";
import MovieCard from "../../components/itemCard";
import useHomePage from "../../hooks/useHomePage";

export default function Home() {
  const { scrollTop, anime, loadMore, onSearch, onDirectToDetail } =
    useHomePage();

  return (
    <>
      <main className="home">
        <Header isHeaderWithAction={false} onAction={() => {}} />
        <InputSearch onSearch={onSearch} />
        <div className="home__content">
          <div className="home__content__list">
            {anime.isLoading
              ? Array.apply(null, Array(7)).map(() => {
                  return <Loader content={1} />;
                })
              : anime.items.map((item: any) => {
                  return (
                    <MovieCard
                      item={item}
                      onDirectToDetail={onDirectToDetail}
                    />
                  );
                })}
          </div>
          {anime.totalResults === anime.items.length ? null : (
            <div onClick={loadMore} className="home__content__loadMore">
              Click To Load More...
            </div>
          )}
        </div>

        {scrollTop === 0 ? null : <ButtonBackToTop />}
      </main>
    </>
  );
}
