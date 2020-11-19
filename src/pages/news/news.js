import React from 'react'
import './news.scss'
import { InnerLoader } from '../../components';

class News extends React.Component {

    state = {
        loading: true
    }


    render() {

        // if(this.state.loading){
        //     return(
        //         <InnerLoader />
        //     )
        // }else{
            return (
                <div className="news">
                    <div className='last_news'>
                        <a href='#' className='block-title'>
                            <span>
                                So'nggi yangiliklar
                            </span>
                        </a>
                        <div className='mb-25'>
                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>

                            <a href='#' className='news-lenta'>
                                <div className='news-lenta__meta'>
                                    <span>
                                        10:02
                                    </span>
                                </div>
                                <span className='news-lenta__title'>
                                    Chimyonda qor ko'chish hafi e'lon qilindi
                                </span>
                            </a>
                        </div>
                    </div>

                    <div className='current_news'>
                        <div className='current_news__header'>
                            <div className='current_news__header_meta'>
                                <div className='current_news__header_meta__date'>18:47 / 18.11.2020</div>
                                <div className='current_news__header_meta__view'>23744</div>
                                <div className='current_news__header_meta__share_news'> Ulashing</div>
                            </div>
                            <div className='current_news__header_title'>
                                «Faqat shu orqali kommunal qarzdorlikni kamaytirish mumkin» - Alisher Qodirov saylovoldi va'dalaridan birini esladi
                            </div>
                        </div>

                        <div className='current_news__content'>
                            <h4>Kommunal to‘lovlarni aholi daromadiga qarab tabaqalashtirish orqali tizimdagi qarzdorlikni kamaytirish lozim, deb hisoblaydi «Milliy tiklanish» partiyasi raisi Alisher Qodirov.</h4>
                            <div className='current_news__content_img'>
                                <img 
                                    src='https://storage.kun.uz/source/6/E2GcoTE9oNOV8485c03b6hoGVS7E0QoV.jpg'
                                />
                                <div className='current_news__content_img_caption'>
                                    Foto: Oliy Majlis Qonunchilik palatasi axborot xizmati
                                </div>
                            </div>
                            <p>lSint amet dolor sit mollit qui duis reprehenderit commodo magna aliqua ullamco consectetur velit eiusmod. Reprehenderit aute deserunt duis pariatur minim nulla quis adipisicing occaecat tempor. Nisi id ad eu in dolore adipisicing culpa dolor consectetur anim consequat esse Lorem. Ad proident laboris nulla magna laborum id enim et. Minim non sunt incididunt pariatur sit amet.</p>
                            <p>lSint amet dolor sit mollit qui duis reprehenderit commodo magna aliqua ullamco consectetur velit eiusmod. Reprehenderit aute deserunt duis pariatur minim nulla quis adipisicing occaecat tempor. Nisi id ad eu in dolore adipisicing culpa dolor consectetur anim consequat esse Lorem. Ad proident laboris nulla magna laborum id enim et. Minim non sunt incididunt pariatur sit amet.</p>
                        </div>

                    </div>

                    <div className='advertisement'>
                        <div className='recommended_news'>
                            <a href='#' className='block-title'>
                                <span>
                                    Tavsiya etamiz
                                </span>
                            </a>

                            <div className='mb-25'>
                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>
                            </div>
                        </div>

                        <div className='much_readed'>
                            <a href='#' className='block-title'>
                                <span>
                                    Ko'p o'qilgan
                                </span>
                            </a>
                            <div className='mb-25'>
                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>

                                <a href='#' className='news-lenta'>
                                    <div className='news-lenta__meta'>
                                        <span>
                                            10:02
                                        </span>
                                    </div>
                                    <span className='news-lenta__title'>
                                        Chimyonda qor ko'chish hafi e'lon qilindi
                                    </span>
                                </a>
                            </div>
                        </div>

                    </div>
                </div>      
            );
        }

    // }
}

export default News;