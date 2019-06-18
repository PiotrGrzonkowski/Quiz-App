import React from 'react';
import Final from './Final.js'





const Question = (props) => {
    const anserws = {
        all: [],
        anserw: '',
        question: '',
        category: '',

    }

    let arr;
    let counter = props.counters



    if (props.counters < 10) {
        console.log(props.counters)


        const myHandler = (id, anserw) => {
            if (id === anserw) {
                props.changeCounter(props.counters)


            }

        }



        arr = props.item

        if (props.item.length > 0) {
            anserws.question = arr[counter].question.replace(/%20/g, ' ').replace(/%3F/g, '?').replace(/%28/g, '(').replace(/%29/g, ')').replace(/%2C/g, ',').replace(/%22/g, '"').replace(/%3A/g, ':').replace(/%27/g, "'").replace(/%26/g, "&")
            console.log(anserws.question)

            anserws.category = arr[counter].category.split(/[%0123456789]/).join(" ")
            anserws.anserw = arr[counter].correct_answer
            anserws.all = arr[counter].incorrect_answers



            // eslint-disable-next-line eqeqeq
            if (anserws.anserw.charAt(0) == 7) {
                let indexChar = anserws.anserw.indexOf("%");
                let firstPartAnserw = anserws.anserw.substring(indexChar, -1);
                let remainingPart = anserws.anserw.substr(indexChar + 7);
                anserws.anserw = `${firstPartAnserw} - ${remainingPart}`

                let str = anserws.all.join(",").split(/[-,]/);
                let x = '';
                let y = '';
                // eslint-disable-next-line no-unused-vars
                let newIndex = '';
                anserws.all = [];

                for (let i = 0; i < str.length; i++) {


                    let a = str[i].replace('%20', '');


                    if (i % 2 === 1) {
                        x = a
                    }
                    if (i % 2 === 0) {
                        y = a;
                        x = '';
                    }
                    if (x !== "" && y !== "") {

                        newIndex = `${x} - ${y}`;
                        anserws.all.push(newIndex);

                    }

                }


                anserws.all = [...anserws.all, anserws.anserw]


            } else {

                let str = arr[counter].incorrect_answers;


                for (let i = 0; i < str.length; i++) {
                    let fixIndexArray = str[i].replace(/%20/g, ' ').replace(/%27/g, "'").replace(/%2B/g, "+").replace(/%23/g, "#").replace(/%3A/g, ':')
                    anserws.all[i] = fixIndexArray;

                }

                anserws.anserw = arr[counter].correct_answer.replace(/%20/g, ' ').replace(/%3A/g, '').replace(/%27/g, "'").replace(/%23/g, "#")



                anserws.all = [...anserws.all, anserws.anserw]

            }


        }
        //Mixing anserws
        if (anserws.all.length !== 0) {
            let currentIndex = anserws.all.length, randomIndex, temporaryValue
            while (0 !== currentIndex) {


                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;


                temporaryValue = anserws.all[currentIndex];
                anserws.all[currentIndex] = anserws.all[randomIndex];
                anserws.all[randomIndex] = temporaryValue;


            }

        }

        if (props.item.length > 0) {
            const { question, category, all, anserw } = anserws


            return (
                <div>
                    <p>{category}</p>

                    <ul className="question">
                        <li>{question}</li>
                        <li><button onClick={() => myHandler(all[0], anserw)} id={all[0]} >{all[0]}</button></li>
                        <li><button onClick={() => myHandler(all[1], anserw)} id={all[1]} >{all[1]}</button></li>
                        <li><button onClick={() => myHandler(all[2], anserw)} id={all[2]} >{all[2]}</button></li>
                        <li><button onClick={() => myHandler(all[3], anserw)} id={all[3]} >{all[3]}</button></li>


                    </ul>
                    {counter = 11 ? null : <Final />}

                </div>
            );
        } else {
            return (
                <div></div>
            )
        }
    } else {
        return (
            <div>

            </div>
        )
    }
}

export default Question;

