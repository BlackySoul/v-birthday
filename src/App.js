import './App.css';
import { LightsOut, WishCard } from './components';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="cybr-wrapper"><p className="cybr-btn">Happy Birthday!
        <span>_</span>
        <span className="cybr-btn__glitch">Happy Birthdev!_</span>
        <span className="cybr-btn__tag">rA9</span>
        </p></div>
      </header>
      <main className="main">
        <section>
          <WishCard task="Для получения награды этой карточки ничего специально делать не нужно." buttonTitle="Получить">
            <div className="warzone-img" />
            <div className="warzone-img-overlay">Здесь в идеале должен был быть ключик от Battle Pass. <br /><br />Но CoD - помойка, Battle.net - помойка, Blizzard - помойка, PSN - помойка. <br /><br />Жизнь - боль. x2</div>
          </WishCard>
        </section>
        <section>
          <WishCard task="Чтобы получить награду в этой карточке придется немного потрудиться и выполнить задание.&#13;&#10;Цель - погасить все лампочки." buttonTitle="Приступить">
            <LightsOut />
          </WishCard>
        </section>
        <section>
        <WishCard task="Это карточка со стандартными поздравлениями. Можно её даже не открывать." buttonTitle="Открыть все равно">
            <div style={{  padding: '20px', fontSize: '15px'}}>#include('standart-сongrats')<br/>#include('nonstandart-сongrats')<br/><br/>printAllCongrats();<br/><br/>А ничего и не вывелось,<br/> потому что плюсовым импортам не место в вебе,<br/> но там правда были самые-самые нарядные поздравления.<br/> Теперь ты на один день ближе к смерти ^_^<br/> (как и в любой другой день)</div>
          </WishCard>
        </section>
      </main>
    </div>
  );
}

export default App;
