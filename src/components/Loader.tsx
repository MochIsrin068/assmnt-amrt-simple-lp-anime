import Skeleton from "react-loading-skeleton";
import { TPropsLoader } from "../types/components.types";

const CONTENT = {
  LIST: 1,
  DETAIL: 2,
};

const Loader = ({ content = CONTENT.LIST }: TPropsLoader) => {
  return (
    <>
      {content === CONTENT.LIST ? (
        <div className="loader --list">
          <Skeleton height={200} />
          <div>
            <Skeleton count={2} />
          </div>
        </div>
      ) : (
        <div className="detailAnime">
          <Skeleton height={200} width="100%" />
          <section className="detailAnime__info">
            <div>
              <Skeleton height={308} width={200} />
              <div style={{ padding: 10 }}>
                <Skeleton count={3} width={200} />
              </div>
            </div>
            <div style={{ marginTop: 20 }}>
              <Skeleton count={2} />
            </div>

            <div style={{ marginTop: 20 }}>
              <Skeleton count={6} />
            </div>
          </section>
        </div>
      )}
    </>
  );
};

export default Loader;
