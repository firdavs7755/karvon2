import React from 'react'
import st from './hot.module.scss'
import cx from 'classnames'
import { useEffect ,useState } from 'react';
import service from '../../../img/it_service.jpg'
import ind_1 from '../../../img/industry_1.jpg'
import ind_2 from '../../../img/industry_2.jpg'
import ind_3 from '../../../img/industry_3.jpg'
import ind_4 from '../../../img/industry_4.jpg'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux';
import parser from 'react-html-parser';
import Slider from 'react-slick'

import { api } from '../../../api/api'

// async function FillHotCards  ()  {
//     const hot_item = [];

//     try {
//         const res = await api().get('ui');

//         console.log(res);
//         if(res.status == 200) {
//             res.data.goryachi.forEach(item => {
//                 hot_item.push(item)
//             })
//             console.log(hot_item.length)

//             hot_item.map((item, index) => {
//                 console.log('work')
    
//                 if(!index){
//                     console.log('yes')
//                 return ( 
//                         <div className={cx(st.last_hot_card)}>
//                             <HotCard  stil='main'/>
//                         </div>
//                 )
//                 }
//                 else {
//                     console.log('no')
//                     return(
//                         <div className={cx(st.hot_cards)}>
//                             <div className={cx(st.hot_cards_item)}>
//                                 <HotCard stil='simple'/>
//                                 <HotCard stil='simple'/>
//                             </div>
//                             <div className={cx(st.hot_cards_item)}>
//                                 <HotCard stil='simple'/>
//                                 <HotCard stil='simple'/>
//                             </div>
//                         </div>
//                     )
//                 }
//             })



//         }
//     } catch (err) {
//         console.log(err);
//     }
// }

const Hot = (props) => {

    // const hot_item = [];

    const { lang } = props.lang;
    const { type } = props.lang;

    console.log(props.data);

    // useEffect( () => {
    //     (async function () {
    //         try {
    //             const res = await api().get('ui');

    //             console.log(res);
    //             if(res.status == 200) {
    //                 res.data.goryachi.forEach(item => {
    //                     hot_item.push(item)
    //                 })
    //                 console.log(hot_item)

    //                 hot_item.map((item, index) => {
    //                     // console.log('work')
            
    //                     if(!index){
    //                         // console.log('yes')
    //                         return ( 
    //                             <div className={cx(st.last_hot_card)}>
    //                                 <HotCard data={item} stil='main'/>
    //                             </div>
    //                     )
    //                     }
    //                     else {
    //                         // console.log('no')
    //                         return(
    //                             <div className={cx(st.hot_cards)}>
    //                                 <div className={cx(st.hot_cards_item)}>
    //                                     <HotCard data={item.index} stil='simple'/>
    //                                     <HotCard stil='simple'/>
    //                                 </div>
    //                                 <div className={cx(st.hot_cards_item)}>
    //                                     <HotCard stil='simple'/>
    //                                     <HotCard stil='simple'/>
    //                                 </div>
    //                             </div>
    //                         )
    //                     }
    //                 })



    //             }
    //         } catch (err) {
    //             console.log(err);
    //         }
            
    //     }())
    // }, [props]) 

    // console.log(hot_item)

    // useEffect( () => {
    //     console.log('worked')
    //     console.log(hot_item.length)
        // hot_item.map((item) => {
        //     console.log('work')

        //     if(item.title){
        //         console.log('yes')
        //     return ( 
        //             <div className={cx(st.last_hot_card)}>
        //                 <HotCard stil='main'/>
        //             </div>
        //     )
        //     }
        //     else {
        //         console.log('yes')
        //         return(
        //             <div className={cx(st.hot_cards)}>
        //                 <div className={cx(st.hot_cards_item)}>
        //                     <HotCard stil='simple'/>
        //                     <HotCard stil='simple'/>
        //                 </div>
        //                 <div className={cx(st.hot_cards_item)}>
        //                     <HotCard stil='simple'/>
        //                     <HotCard stil='simple'/>
        //                 </div>
        //             </div>
        //         )
        //     }
        // })

        // for(let i =hot)
    // })


    return (
        <div className={cx(st.hot)}>
            <div>
                <h1 className={cx('home_blog_title')}> { lang.bloghome } </h1>
                <div className={cx(st.hot_items)}>
                    
                    <div className={cx(st.last_hot_card)}>
                        <HotCard data={props.data[props.data.length-1]} type={type} stil='main'/>
                    </div>

                    <div className={cx(st.hot_cards)}>
                        <div className={cx(st.hot_cards_item)}>
                            <HotCard data={props.data[props.data.length-2]} type={type} stil='simple'/>
                            <HotCard data={props.data[props.data.length-3]} type={type} stil='simple'/>
                        </div>
                        <div className={cx(st.hot_cards_item)}>
                            <HotCard data={props.data[props.data.length-4]} type={type} stil='simple'/>
                            <HotCard data={props.data[props.data.length-5]} type={type} stil='simple'/>
                        </div>
                    </div>

                    
                </div>


                {/* <FillHotCards data={hot_item}/> */}
                {/* <Slider arrows={false} dots={false} slidesToShow={5} infinite responsive={[
                    {
                        breakpoint : 500,
                        settings : {
                            slidesToShow : 1,
                            slidesToScroll : 1
                        }
                    },
                    {
                        breakpoint : 800,
                        settings : {
                            slidesToShow : 2,
                            slidesToScroll : 1
                        }
                    },
                    {
                        breakpoint : 1100,
                        settings : {
                            slidesToShow : 3,
                            slidesToScroll : 2
                        }
                    },
                    {
                        breakpoint : 1300,
                        settings : {
                            slidesToShow : 4,
                            slidesToScroll : 2
                        }
                    }
                ]}>
                    {
                        props.data.map((item,index)=>{
                            return(
                                <HotCard key={item._id} data={item} type={type}/>
                            )
                        })
                    }
                </Slider> */}
            </div>
        </div>
    );
}

function HotCard({data , type, stil}){
    console.log(type)
    return(
        // <div className={cx(st.box)}>
        //     <img src={`http://umdsoft.uz${data.image}`} alt=""/>
        //     <Link to="" className={cx(st.content_h2)}>
        //         {data.title[type]}
        //     </Link>
        //     <p>
        //         { parser(data.description[type]) }
        //     </p>
        //     <button>Davomini o'qish</button>
        // </div>
        <div className={cx(st.box, st[stil])}>
            <img className={cx(st.hot_card_img)} src='https://www.dataiku.com/wp-content/uploads/2019/10/chris-ried-ieic5Tq8YMk-unsplash-1618x1080.jpg' alt=""/>
            <Link to="/news" className={cx(st.content_h2)}>
                {data.title[type]}
            </Link>
            <p>
               { parser(data.description[type]) }
            </p>
            <button><Link to='/news' >Davomini o'qish</Link></button>
        </div>
    )
}

// function FillHotCards({data}) {
//     if(data){
//         data.map((item, index) => {

//             if(index==0){
//                return ( 
//                     <div className={cx(st.last_hot_card)}>
//                         <HotCard stil='main'/>
//                     </div>
//                )
//             }
//             else {
//                 return(
//                     <div className={cx(st.hot_cards)}>
//                         <div className={cx(st.hot_cards_item)}>
//                             <HotCard stil='simple'/>
//                             <HotCard stil='simple'/>
//                         </div>
//                         <div className={cx(st.hot_cards_item)}>
//                             <HotCard stil='simple'/>
//                             <HotCard stil='simple'/>
//                         </div>
//                     </div>
//                 )
//             }
//         })
//     }
//     else {
//         return(
//             <div>hello error</div>
//         )
//     }
// }

const mstp = state => (state);

export default connect(mstp,null)(Hot);