export default function App() {
  return (
    <div className="container">
      <section className="container__header">
        <div className="header">
          <div className="header__content">
            <div className="header__content--timer"></div>
            <div className="header__content--status"></div>
          </div>
        </div>
        <main className="scorecard">
          <div className="scorecard__card">
            <div className="scorecard__card__team">ind</div>
            <div className="scorecard__card__stat">
              <span className="scorecard__card__stat__score">150-0 </span>
              <span className="scorecard__card__stat__overs">(26.5 Ov)</span>
            </div>
            <div className="scorecard__card__runrate">Run rate : 6.5</div>
          </div>
        </main>
      </section>
      <section className="scoresheet">
        <header className="scoresheet__header">
          <div className="scoresheet__header__stats__batting">
            <div className="scoresheet__header__stats__batting__parameters">
              <div className=" item item__1"></div>
              <div className=" item item__2">R</div>
              <div className=" item item__3">B</div>
              <div className=" item item__4">4's</div>
              <div className=" item item__5">6's</div>
            </div>
            <div className="scoresheet__header__stats__batting__values">
              <div className=" item item__1"> Team IND : </div>
              <div className=" item item__2">68</div>
              <div className="item item__3">72</div>
              <div className=" item item__4">8</div>
              <div className=" item item__5">2</div>
            </div>
          </div>
          <div className="scoresheet__header__extras">
            <span className="scoresheet__header__extras__text-color">
              Partnership :{" "}
            </span>
            150
            <br></br>
            <span className="scoresheet__header__extras__text-color">
              Extras :
            </span>{" "}
            3
          </div>
          <div className="scoresheet__header__stats__bowling">
            <div className="scoresheet__header__stats__bowling__parameters">
              <div className=" item item__1"></div>
              <div className=" item item__2">O</div>
              <div className=" item item__3">R</div>
              <div className=" item item__4">W</div>
              <div className=" item item__5">ECON</div>
            </div>
            <div className="scoresheet__header__stats__bowling__values">
              <div className=" item item__1"> Team AUS : </div>
              <div className=" item item__2">8</div>
              <div className="item item__3">54</div>
              <div className=" item item__4">2</div>
              <div className=" item item__5">4.41</div>
            </div>
          </div>
        </header>
      </section>
      <section className="section__footer">
        <div className="section__footer__buttons">
          <div className="section__footer__buttons__runs">
            <div className="btns">
              <button className="btns__btn-runs">.</button>
              <button className="btns__btn-runs">1</button>
              <button className="btns__btn-runs">2</button>
              <button className="btns__btn-runs">3</button>
              <button className="btns__btn-runs">4</button>
              <button className="btns__btn-runs">6</button>
            </div>
          </div>
          <div className="section__footer__buttons__additions">
            <div className="btns">
              <button className="btns__btn-additions">Wickets</button>
              <button className="btns__btn-additions">Wide</button>
              <button className="btns__btn-additions">Noball</button>
              <button className="btns__btn-additions">Bye</button>
            </div>
          </div>
          <div className="section__footer__buttons__utilities">
            <div className="btns__utls">
              <button className="btns__utls__btn-utilities">Match-End</button>
              <button className="btns__utls__btn-utilities">Undo</button>
            </div>
          </div>
        </div>
        <div className="section__footer__scores">
          <div className="section__footer__scores__recent-1">123423</div>
          <div className="section__footer__scores__recent-2">116622</div>
          <div className="section__footer__scores__recent-3">6..5.1.</div>
        </div>
      </section>
    </div>
  );
}
