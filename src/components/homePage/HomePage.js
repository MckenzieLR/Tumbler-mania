import { useNavigate } from "react-router-dom"
import "./homepage.css"
import React from "react"
import coffeemug from '../imgs/Aztec-Mug.JPG'
import turqskinny from '../imgs/Aztec-Turq:wrap.PNG'
import baseballHitSteal from '../imgs/BaseballHit&Steal.JPG'
import baseballMom from '../imgs/BaseballMom.JPG'
import blessedmama from '../imgs/BlessedMama-white:turq..JPG'
import blueGeode from '../imgs/Blue-Geode.JPG'
import caffeieneQueen from '../imgs/CaffeineQueen.JPG'
import canAm from '../imgs/Can-am.JPG'
import leopardKoozie from '../imgs/Leopard-koozie.JPG'
import seams from '../imgs/LivingLifebytheSeams.JPG'
import Mamamini from '../imgs/Mama:Mini-leopard.JPG'
import turqMamaBear from '../imgs/MamaBear-Turq:Silver.JPG'
import MinnieMouse from '../imgs/MinnieMouse.JPG'
import Pencil from '../imgs/Pencil.PNG'
import pendelton from '../imgs/PendeltonDesign.JPG'
import Teacheroffduty from '../imgs/TeacherOffDuty.JPG'
import UnicornBabyshark from '../imgs/Unicorn:BabyShark.JPG'


export const HomePage = () => {

    const localTumblerUser = localStorage.getItem("tumbler_user")
    const tumblerUserObject = JSON.parse(localTumblerUser)

    const Navigate = useNavigate()

return <>
{
    tumblerUserObject.staff 
    ? <>
       <div className="home-page">
        
        <div className="mom-tumblers">
            <h3 className="mom-header">Mom Tumblers</h3>
            <div  className="mom-imgs">
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
        <img src={UnicornBabyshark} alt="Unicorn (left) Baby Shark (Right)" />
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
    : <>
    <div className="order-button">
    <button className="button-62" onClick={()=> Navigate("/order/create")}>Start Order</button>
    </div>
    <div className="home-page">
        
            <div className="mom-tumblers">
                <h3 className="mom-header">Mom Tumblers</h3>
                <div  className="mom-imgs">
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
            <img src={UnicornBabyshark} alt="Unicorn (left) Baby Shark (Right)" />
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

}
</>
}