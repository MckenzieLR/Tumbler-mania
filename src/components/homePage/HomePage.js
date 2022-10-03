import { useNavigate } from "react-router-dom";
import "./homepage.css";
import React, { useState } from "react";
import coffeemug from "../imgs/Aztec-Mug.JPG";
import turqskinny from "../imgs/Aztec-Turq:wrap.PNG";
import baseballHitSteal from "../imgs/BaseballHit&Steal.JPG";
import baseballMom from "../imgs/BaseballMom.JPG";
import blessedmama from "../imgs/BlessedMama-white:turq..JPG";
import blueGeode from "../imgs/Blue-Geode.JPG";
import caffeieneQueen from "../imgs/CaffeineQueen.JPG";
import canAm from "../imgs/Can-am.JPG";
import leopardKoozie from "../imgs/Leopard-koozie.JPG";
import seams from "../imgs/LivingLifebytheSeams.JPG";
import Mamamini from "../imgs/Mama:Mini-leopard.JPG";
import turqMamaBear from "../imgs/MamaBear-Turq:Silver.JPG";
import MinnieMouse from "../imgs/MinnieMouse.JPG";
import Pencil from "../imgs/Pencil.PNG";
import pendelton from "../imgs/PendeltonDesign.JPG";
import Teacheroffduty from "../imgs/TeacherOffDuty.JPG";
import UnicornBabyshark from "../imgs/Unicorn:BabyShark.JPG";

export const HomePage = () => {
  const [flip, setFlip] = useState("");
  const localTumblerUser = localStorage.getItem("tumbler_user");
  const tumblerUserObject = JSON.parse(localTumblerUser);

  const Navigate = useNavigate();

  return (
    <>
      {tumblerUserObject.staff ? (
        <>
          <div className="home-page">
            <div className="mom-tumblers">
              <h3 className="mom-header">Mom Tumblers</h3>
              <div className="mom-imgs">
                <img src={blessedmama} alt="Blessed Mama Bear" />
                <img src={Mamamini} alt="Mama Mini Set" />
                <img src={turqMamaBear} alt="Mama Bear" />
                <img src={baseballHitSteal} alt="Baseball Hit and Steal" />
                <img src={baseballMom} alt="Baseball Mom" />
                <img src={seams} alt="Baseball Living Life by the Seams" />
              </div>
            </div>
            <div className="can-coolers">
              <h3 className="cooler-header">Can Coolers</h3>
              <div className="cooler-imgs">
                <img src={canAm} alt="Can-Am Koozie" />
                <img src={leopardKoozie} alt="Leopard Koozie" />
              </div>
            </div>
            <div className="teacher-tumblers">
              <h3 className="teacher-header">Teacher Tumblers</h3>
              <div className="teacher-imgs">
                <img src={Pencil} alt="Pencil Design" />
                <img src={Teacheroffduty} alt="Teacher Off Duty" />
              </div>
            </div>
            <div className="kid-tumblers">
              <h3 className="kid-header">Kid Tumblers</h3>
              <div className="kids-imgs">
                <img src={MinnieMouse} alt="Minnie Mouse Sippy" />
                <img
                  src={UnicornBabyshark}
                  alt="Unicorn (left) Baby Shark (Right)"
                />
              </div>
            </div>
            <div className="aztec-tumblers">
              <h3 className="aztec-header"> Aztec Print Tumblers</h3>
              <div className="aztec-imgs">
                <img src={coffeemug} alt="Aztec Coffee Mug" />
                <img src={turqskinny} alt="Aztec Turq. Wrap" />
                <img src={pendelton} alt="Full Pendleton Design" />
              </div>
            </div>
            <div className="misc-tumblers">
              <h3 className="misc-header">Misc Tumblers</h3>
              <div className="misc-imgs">
                <img src={blueGeode} alt="Blue Geode" />
                <img src={caffeieneQueen} alt="Caffeiene Queen" />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="order-button">
            <button
              className="button-62"
              onClick={() => Navigate("/order/create")}
            >
              Start Order
            </button>
          </div>
          <div className="home-page card-grid">
            <div className="mom-tumblers">
              <h3 className="mom-header">Mom Tumblers</h3>
              <div className="mom-imgs">
                <div id="tumbler--1" className={`card ${flip === "tumbler--1" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--1")}>
                    <img src={blessedmama} alt="Blessed Mama Bear" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    30 oz Curve "Blessed Mama" Bear with baby bear(s)
                  </div>
                </div>
                <div id="tumbler--2" className={`card ${flip === "tumbler--2" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--2")}>
                    <img src={Mamamini} alt="Mama Mini Set" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    30 oz Skinny "Mama" 15 oz Skinny "Mini"
                  </div>
                </div>
                <div id="tumbler--3" className={`card ${flip === "tumbler--3" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--3")}>
                    <img src={turqMamaBear} alt="Mama Bear" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    20 oz Curve Floral "Mama" bear
                  </div>
                </div>
                <div id="tumbler--4" className={`card ${flip === "tumbler--4" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--4")}>
                    <img src={baseballHitSteal} alt="Baseball Hit and Steal" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    20 oz Skinny "I teach my kid to hit and steal" Baseball
                  </div>
                </div>
                <div id="tumbler--5" className={`card ${flip === "tumbler--5" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--5")}>
                    <img src={baseballMom} alt="Baseball Mom" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    20 oz Skinny "Baseball Mom"
                  </div>
                </div>
                <div id="tumbler--6" className={`card ${flip === "tumbler--6" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--6")}>
                    <img src={seams} alt="Baseball Living Life by the Seams" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    20 oz Curve "Living Life By The Seams"
                  </div>
                </div>
              </div>
            </div>
            <div className="can-coolers">
              <h3 className="cooler-header">Can Coolers</h3>
              <div className="cooler-imgs">
              <div id="tumbler--7" className={`card ${flip === "tumbler--7" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--7")}>
                  <img src={canAm} alt="Can-Am Koozie" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    Can-Am 3-in-1 Can Cooler 
                  </div>
                </div>
                <div id="tumbler--8" className={`card ${flip === "tumbler--8" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--8")}>
                  <img src={leopardKoozie} alt="Leopard Koozie" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    Half leopard 3-in-1 Can Cooler
                  </div>
                </div>
              </div>
            </div>
            <div className="teacher-tumblers">
              <h3 className="teacher-header">Teacher Tumblers</h3>
              <div className="teacher-imgs">
              <div id="tumbler--9" className={`card ${flip === "tumbler--9" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--9")}>
                  <img src={Pencil} alt="Pencil Design" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    Glittered Pencil 30 oz Straight
                  </div>
                </div>
                <div id="tumbler--10" className={`card ${flip === "tumbler--10" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--10")}>
                  <img className="teacher-set" src={Teacheroffduty} alt="Teacher Off Duty" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    Teacher Off Duty 20 oz Curve
                  </div>
                </div>
                
                
              </div>
            </div>
            <div className="kid-tumblers">
              <h3 className="kid-header">Kid Tumblers</h3>
              <div className="kids-imgs">
              <div id="tumbler--11" className={`card ${flip === "tumbler--11" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--11")}>
                  <img src={MinnieMouse} alt="Minnie Mouse Sippy" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    Minnie Mouse 12 oz Sippy
                  </div>
                </div>
                <div id="tumbler--12" className={`card ${flip === "tumbler--12" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--12")}>
                  <img src={UnicornBabyshark} alt="Unicorn (left) Baby Shark (Right)" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    12 oz Kid's Unicorn (left) Baby Shark (Right)
                  </div>
                </div>
              </div>
            </div>
            <div className="aztec-tumblers">
              <h3 className="aztec-header"> Aztec Print Tumblers</h3>
              <div className="aztec-imgs">
              <div id="tumbler--13" className={`card ${flip === "tumbler--13" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--13")}>
                  <img src={coffeemug} alt="Aztec Coffee Mug" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    Multi Color Strip Aztec 12 oz Coffee Mug 
                  </div>
                </div>
                <div id="tumbler--14" className={`card ${flip === "tumbler--14" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--14")}>
                  <img src={turqskinny} alt="Aztec Turq. Wrap" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    20 oz Skinny Aztec Full Wrap
                  </div>
                </div>
                <div id="tumbler--15" className={`card ${flip === "tumbler--15" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--15")}>
                  <img src={pendelton} alt="Full Pendleton Design" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    20 oz Skinny Pendelton Glittered Full Wrap
                  </div>
                </div>
              </div>
            </div>
            <div className="misc-tumblers">
              <h3 className="misc-header">Misc Tumblers</h3>
              <div className="misc-imgs">
              <div id="tumbler--16" className={`card ${flip === "tumbler--16" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--16")}>
                  <img className="geode" src={blueGeode} alt="Blue Geode" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    20 oz Skinny Glittered Geode Design
                  </div>
                </div>
                <div id="tumbler--17" className={`card ${flip === "tumbler--17" ? "flip" : ""}`}>
                  <div className="front" onClick={() => setFlip("tumbler--17")}>
                  <img className="caffeine-queen" src={caffeieneQueen} alt="Caffeiene Queen" />
                  </div>
                  <div className="back" onClick={() => setFlip("")}>
                    30 oz Skinny "Caffeiene Queen" with half Leopard
                  </div>
                </div>
            
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};
