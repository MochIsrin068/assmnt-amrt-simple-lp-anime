import ReactStars from "react-rating-stars-component";

import Header from "../../components/Header";
import ButtonBackToTop from "../../components/ButtonBackToTop";

import useDetailPage from "../../hooks/useDetailPage";
import Loader from "../../components/Loader";

const DetailAnime = () => {
  const { anime: animeDetail, onBack, scrollTop }: any = useDetailPage();

  if (animeDetail?.isLoading) {
    return <Loader content={2} />;
  }

  return (
    <main className="detailAnime">
      <Header
        backgroundImageUrl={
          animeDetail?.data?.trailer?.images?.maximum_image_url ||
          animeDetail?.data?.trailer?.images?.large_image_url ||
          "https://via.placeholder.com/900x300?text=https://rindev-labs.vercel.app/"
        }
        isHeaderWithAction={true}
        onAction={onBack}
      />
      <section className="detailAnime__info">
        <div>
          <img src={`${animeDetail?.data?.images?.webp?.image_url}`} alt="" />
          <div>
            <h3>{animeDetail?.data?.title}</h3>
            <h4>{animeDetail?.data?.title_japanese}</h4>
            <section>
              {animeDetail?.data?.genres.map((genre: any) => (
                <span key={genre?.mal_id}>{genre?.name}</span>
              ))}
            </section>
            <div>
              <ReactStars
                count={5}
                size={16}
                edit={false}
                isHalf={true}
                value={5}
              />
              <span>{animeDetail?.data?.rating}</span>
            </div>
            <div>
              Duration : <p>{animeDetail?.data?.duration}</p>
            </div>
            <div>
              Aired date : <p>{animeDetail?.data?.aired?.string}</p>
            </div>
          </div>
        </div>
        <div>
          <h4>Synopsis</h4>
          <p>{animeDetail?.data?.synopsis || "-"}</p>
        </div>
      </section>

      {scrollTop === 0 ? null : <ButtonBackToTop />}
    </main>
  );
};

export default DetailAnime;
