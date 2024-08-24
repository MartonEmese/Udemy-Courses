import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/header/index';
import NewsList from './components/news_list';
import './styles/styles.css';
import StatePlayground from './components/playground/state';
import { newsData } from './utils/data'

const App = () => {
    let [news,setNews] = useState(newsData)

    const getKeywords = (event) => {
        let keywords = event.target.value;
        let filtered = newsData.filter(item => {
            return item.title.indexOf(keywords) > -1;
        })

        setNews(filtered);
    }

    return (
        <>
            <Header getKeywords={getKeywords}/>
            <div className='container'>
                {/* <StatePlayground/> */}
                <NewsList news={news}/>
                <br/>
                <h1>I'm a children</h1>
            </div>
        </>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>);