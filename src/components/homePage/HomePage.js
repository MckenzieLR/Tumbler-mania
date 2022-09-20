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
       <div> 
           <img src={coffeemug} alt="Aztec Coffee Mug" />
    <img src={turqskinny} alt="Aztec Turq. Wrap" />
    <img src={baseballHitSteal} alt="Baseball Hit and Steal" />
    <img src={baseballMom} alt="Baseball Mom" />
    <img src={blessedmama} alt="Blessed Mama Bear" />
    <img src={blueGeode} alt="Blue Geode" />
    <img src={caffeieneQueen} alt="Caffeiene Queen" />
    <img src={canAm} alt="Can-Am Koozie" />
    <img src={leopardKoozie} alt="Leopard Koozie" />
    <img src={seams} alt="Baseball Living Life by the Seams" />
    <img src={Mamamini} alt="Mama Mini Set" />
    <img src={turqMamaBear} alt="Mama Bear" />
    <img src={MinnieMouse} alt="Minnie Mouse Sippy" />
    <img src={Pencil} alt="Pencil Design" />
    <img src={pendelton} alt="Full Pendleton Design" />
    <img src={Teacheroffduty} alt="Teacher Off Duty" />
    <img src={UnicornBabyshark} alt="Unicorn (left) Baby Shark (Right)" />
    </div> 
    </>
    : <>
    <div>
        <div className="order-button">
    <button onClick={()=> Navigate("/order/create")}>Start Order</button>
    </div>
    <img src={coffeemug} alt="Aztec Coffee Mug" />
    <img src={turqskinny} alt="Aztec Turq. Wrap" />
    <img src={baseballHitSteal} alt="Baseball Hit and Steal" />
    <img src={baseballMom} alt="Baseball Mom" />
    <img src={blessedmama} alt="Blessed Mama Bear" />
    <img src={blueGeode} alt="Blue Geode" />
    <img src={caffeieneQueen} alt="Caffeiene Queen" />
    <img src={canAm} alt="Can-Am Koozie" />
    <img src={leopardKoozie} alt="Leopard Koozie" />
    <img src={seams} alt="Baseball Living Life by the Seams" />
    <img src={Mamamini} alt="Mama Mini Set" />
    <img src={turqMamaBear} alt="Mama Bear" />
    <img src={MinnieMouse} alt="Minnie Mouse Sippy" />
    <img src={Pencil} alt="Pencil Design" />
    <img src={pendelton} alt="Full Pendleton Design" />
    <img src={Teacheroffduty} alt="Teacher Off Duty" />
    <img src={UnicornBabyshark} alt="Unicorn (left) Baby Shark (Right)" />
    </div>
    </>

}
</>
}