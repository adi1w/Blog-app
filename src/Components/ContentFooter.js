import React from "react";

import { Store } from "./DataStore";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Content.css";

const ContentFooter = (props) => {
  const [content] = useContext(Store);

  const random = Math.floor(Math.random() * 10);

  return (
    <>
      <div className="footer">
        <div className="content__footer">
          <h1>More From The Siren</h1>
          <div className="footer__elements">
            {content
              .filter((e) => e.cat === props.category && e.id !== props.idValue)
              .slice(random, random + 4)
              .map((e) => {
                return (
                  <div className="footer__3Elements" key={e.id}>
                    <NavLink
                      state={{ id: e.id, title: e.title }}
                      to={"/content"}
                    >
                      {" "}
                      <img onClick={()=>  window.scrollTo(0, 0)}
                        className="content__images"
                        src={e.image}
                        alt={e.title}
                      />
                    </NavLink>

                    <NavLink
                      className="content__heading"
                      state={{ id: e.id, title: e.title }}
                      to={"/content"}
                    >
                      <div onClick={()=>  window.scrollTo(0, 0)} className="content__Title">{e.title}</div>
                    </NavLink>
                    <div className="content__profile">
                      <img
                        className="profileIcon iconft"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqhazeeeCKKauzGiteiw4lCeXem4L_zc5X0NlSEx_Cww&s"
                        alt="profile"
                      />
                      <div className="userName">
                        <div>Aditi chaudhary</div>
                        <h5>sept 1, 2023</h5>
                      </div>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ContentFooter;