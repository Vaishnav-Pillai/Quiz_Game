import './Questions.css';
import React, {useState} from 'react'
import FinalResults from './FinalResults';
import ShowScore from './ShowScore';

function Questions() {

    const [ques,setQues] = useState(0);
    const [marks,setMarks] = useState(0);
    const [result,setResult] = useState(false);
    const [score,setScore] = useState(false);
    const [loading,setLoading] = useState(0);
    let [mcq1,setMcq1] = useState('0');
    let [mcq2,setMcq2] = useState('0');
    let [mcq3,setMcq3] = useState('0');
    let [mcq4,setMcq4] = useState('0');
    let [mcq5,setMcq5] = useState('0');
    let [selected,setSelected] = useState({
        q1: '5',
        q2: '5',
        q3: '5',
        q4: '5',
        q5: '5'
    });

    const handleNext=()=>{
        setQues(ques+1);
        let a=100/questions.length;
        setLoading(loading+a);
    }

    const handlePrev=()=>{
        setQues(ques-1);
        let a=100/questions.length;
        setLoading(loading-a);
    }

    const handleSubmit=()=>{
        setMcq1(selected.q1 === questions[0].Correct?'1':mcq1);
        setMcq2(selected.q2 === questions[1].Correct?'1':mcq2);
        setMcq3(selected.q3 === questions[2].Correct?'1':mcq3);
        setMcq4(selected.q4 === questions[3].Correct?'1':mcq4);
        setMcq5(selected.q5 === questions[4].Correct?'1':mcq5);
        let a=100/questions.length;
        setLoading(loading+a);
        setScore(true);
    }

    const updatemarks=()=>{
        mcq1=parseInt(mcq1);
        mcq2=parseInt(mcq2);
        mcq3=parseInt(mcq3);
        mcq4=parseInt(mcq4);
        mcq5=parseInt(mcq5);
        setMarks(mcq1+mcq2+mcq3+mcq4+mcq5);
        setScore(false);
        setResult(true);
    }

    const retry=()=>{
        console.log("retry");
        setScore(false);
        setMarks(0);
        setQues(0);
        setResult(false);
        setLoading(0);
        setSelected({...selected,q1: '5'});
        setSelected({...selected,q2: '5'});
        setSelected({...selected,q3: '5'});
        setSelected({...selected,q4: '5'});
        setSelected({...selected,q5: '5'});
        setMcq1('0');
        setMcq2('0');
        setMcq3('0');
        setMcq4('0');
        setMcq5('0');
    }

    const questions = [
        {
          text: "What is the colour of Orange?",
          options: [
            { id: 0, text: "Orange"},
            { id: 1, text: "Yellow"},
            { id: 2, text: "Green"},
            { id: 3, text: "Red"},
          ],
          Correct: 0,
        },
        {
          text: "Which is the Fruit that keeps the Doctor away?",
          options: [
            { id: 0, text: "Orange"},
            { id: 1, text: "Mango"},
            { id: 2, text: "Apple"},
            { id: 3, text: "Grapes"},
          ],
          Correct: 2,
        },
        {
          text: "SI Unit of Velocity is: ",
          options: [
            { id: 0, text: "m/g/s"},
            { id: 1, text: "m/s"},
            { id: 2, text: "Newton"},
            { id: 3, text: "Pascal"},
          ],
          Correct: 1,
        },
        {
          text: "Is Octate Rule Always Correct?",
          options: [
            { id: 0, text: "Yes"},
            { id: 1, text: "May Be"},
            { id: 2, text: "Don't Know"},
            { id: 3, text: "No"},
          ],
          Correct: 3,
        },
        {
          text: "is 0! = 1! ?",
          options: [
            { id: 0, text: "May Be"},
            { id: 1, text: "Depends"},
            { id: 2, text: "Yes"},
            { id: 3, text: "No"},
          ],
          Correct: 2,
        },
      ];

    return (
        <>
        {score?(
          <ShowScore retry={retry} updatemarks={updatemarks} loading={loading}/>
        ) : (
          result?(
              <FinalResults retry={retry} marks={marks}/>
          ) : (
          <div className="container my-4">
              <div className="progress" role="progressbar" aria-label="Animated striped example" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" style={{margin: '20px 70px', marginTop: '85px', border: '1px solid white', borderWidth: '1.5px'}}>
                  <div className="progress-bar progress-bar-striped progress-bar-animated bg-dark" style={{width: `${loading}%`}}>{loading}%</div>
              </div>
              <p/>
              <div id="carouselExampleIndicators" className="carousel slide" style={{border: '2px solid white', borderRadius: '15px'}}>
                  <div className="carousel-indicators my-2 visually hidden">
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" disabled></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2" disabled></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3" disabled></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4" disabled></button>
                      <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5" disabled></button>
                  </div>
                  <div className="carousel-inner">
                      <div className="carousel-item active question-card" style={{backgroundColor: 'black', color: 'white'}}>
                          <h2>Question {ques + 1}: </h2>
                          <h3 className="question-text my-3">{questions[ques].text}</h3>
                          <ul>
                              {questions[ques].options.map((i) => {
                                return (
                                  <li
                                    className={`option ${
                                      selected.q1 === i.id?"clicked":null
                                    }`}
                                    key={i.id}
                                    onClick={()=>setSelected({...selected,q1: i.id})}
                                  >
                                    {i.text}
                                  </li>
                                );
                              })}
                          </ul>
                          <br/><br/>
                          <div className="carousel-caption d-none d-md-block">
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Next</span>
                              </button>
                          </div>
                      </div>
                      <div className="carousel-item question-card" style={{backgroundColor: 'black', color: 'white'}}>
                          <h2>Question {ques + 1}: </h2>
                          <h3 className="question-text my-3">{questions[ques].text}</h3>
                          <ul>
                              {questions[ques].options.map((i) => {
                                return (
                                  <li
                                    className={`option ${
                                      selected.q2 === i.id?"clicked":null
                                    }`}
                                    key={i.id}
                                    onClick={()=>setSelected({...selected,q2: i.id})}
                                  >
                                    {i.text}
                                  </li>
                                );
                              })}
                          </ul>
                          <br/><br/>
                          <div className="carousel-caption d-none d-md-block">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Next</span>
                              </button>
                          </div>
                      </div>
                      <div className="carousel-item question-card" style={{backgroundColor: 'black', color: 'white'}}>
                          <h2>Question {ques + 1}: </h2>
                          <h3 className="question-text my-3">{questions[ques].text}</h3>
                          <ul>
                              {questions[ques].options.map((i) => {
                                return (
                                  <li
                                    className={`option ${
                                      selected.q3 === i.id?"clicked":null
                                    }`}
                                    key={i.id}
                                    onClick={()=>setSelected({...selected,q3: i.id})}
                                  >
                                    {i.text}
                                  </li>
                                );
                              })}
                          </ul>
                          <br/><br/>
                          <div className="carousel-caption d-none d-md-block">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Next</span>
                              </button>
                          </div>
                      </div>
                      <div className="carousel-item question-card" style={{backgroundColor: 'black', color: 'white'}}>
                          <h2>Question {ques + 1}: </h2>
                          <h3 className="question-text my-3">{questions[ques].text}</h3>
                          <ul>
                              {questions[ques].options.map((i) => {
                                return (
                                  <li
                                    className={`option ${
                                      selected.q4 === i.id?"clicked":null
                                    }`}
                                    key={i.id}
                                    onClick={()=>setSelected({...selected,q4: i.id})}
                                  >
                                    {i.text}
                                  </li>
                                );
                              })}
                          </ul>
                          <br/><br/>
                          <div className="carousel-caption d-none d-md-block">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleNext}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Next</span>
                              </button>
                          </div>
                      </div>
                      <div className="carousel-item question-card" style={{backgroundColor: 'black', color: 'white'}}>
                          <h2>Question {ques + 1}: </h2>
                          <h3 className="question-text my-3">{questions[ques].text}</h3>
                          <ul>
                              {questions[ques].options.map((i) => {
                                return (
                                  <li
                                    className={`option ${
                                      selected.q5 === i.id?"clicked":null
                                    }`}
                                    key={i.id}
                                    onClick={()=>setSelected({...selected,q5: i.id})}
                                  >
                                    {i.text}
                                  </li>
                                );
                              })}
                          </ul>
                          <br/><br/>
                          <div className="carousel-caption d-none d-md-block">
                              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev" onClick={handlePrev}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px'}}>Previous</span>
                              </button>
                              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next" onClick={handleSubmit}>
                                  <span  style={{fontSize: '25px', border: '2px solid white', borderRadius: '5px', backgroundColor: 'white', color: 'black'}}>Submit</span>
                              </button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          )
      )}
      </>
    )
}

export default Questions
