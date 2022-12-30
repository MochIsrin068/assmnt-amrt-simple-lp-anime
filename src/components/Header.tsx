import { TPropsHeader } from "../types/components.types";
import IconBack from "../assets/arrow-back.png";

export default function Header({
  isHeaderWithAction,
  backgroundImageUrl,
  onAction,
}: TPropsHeader) {
  return (
    <>
      <header
        className={`header ${
          isHeaderWithAction ? "--header-action" : "--header-home"
        }`}
        style={{
          backgroundImage: isHeaderWithAction
            ? `url(${backgroundImageUrl})`
            : "",
        }}
      >
        {isHeaderWithAction ? (
          <div className="header__back-menu">
            <span onClick={onAction}>
              <img src={IconBack} alt="<" />
              Back
            </span>
          </div>
        ) : (
          <div className="header__jumbotron">
            <h1>The Anime Movie</h1>
            <p>
              The Anime Movie is a web-based application to see what movies are
              trending and popular that you can use as a reference to watch with
              your special someone :)
            </p>
          </div>
        )}
      </header>
      ;
    </>
  );
}
