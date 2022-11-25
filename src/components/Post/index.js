import Avatar from '../images/avatar_default.png';
import Cube from '../images/skeleton-rect.png';
import Img from '../images/thread1.png'

export default function Post(){
    return(
          <div class="news-list">
            <div class="news">
                <div class="left-side">
                <div class="top">
                    <div class="info-top">
                    <img src={Avatar} alt="" />
                    <p id="author">Authors name</p>
                    <p>in</p>
                    <p id="topic">Topics Name ·</p>
                    <p id="date">7 July</p>
                    </div>
                    <div class="text-top">
                    <p id="title">7 Practical CSS Tips</p>
                    <p id="description">You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
                    </div>
                </div>
                <div class="bottom">
                    <div class="info-bottom">
                    <button  >Java Script</button>
                    <p>12 min read · Selected for you</p>
                    </div>
                    <div class="actions">
                    <img src={Cube} alt="" />
                    <img src={Cube} alt="" />
                    <img src={Cube} alt="" />
                    </div>
                </div>
                </div>
                <div class="image">
                    <img src={Img} alt="" />
                </div>
            </div>
            <hr/>
          </div>
    );
}