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
        data-testid="header-container"
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
            <span onClick={onAction} data-testid="header-back-menu">
              <img src={IconBack} alt="<" data-testid="icon-arrow-back" />
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
