import React from 'react'
import './Footer.scss'

import facebookIcon from '../../assets/img/icons/fb.svg'
import instagramIcon from '../../assets/img/icons/insta.svg'
import youtubeIcon from '../../assets/img/icons/youtube.svg'

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer__row">
				<div className="footer__col-left">
					<div className="footer__about-company">
						<h3 className="footer__title">О компании</h3>
						<div>
							<a href="/" className="footer__link">
								Наши работы
							</a>
						</div>
						<div>
							<a href="/" className="footer__link">
								Контакты
							</a>
						</div>
						<div>
							<a href="/" className="footer__link">
								Доставка
							</a>
						</div>
						<div>
							<a href="/" className="footer__link">
								Форма заказа
							</a>
						</div>
					</div>
				</div>
				<div className="footer__col-central">
					<div className="footer-services">
						<h3 className="footer__title">Услуги</h3>
						<div className="footer-services__row">
							<div className="footer-services__col">
								<p>
									<a href="/" className="footer__link">
										Производство оборудования
									</a>
								</p>
								<p>
									<a href="/" className="footer__link">
										Металлическая мебель
									</a>
								</p>
								<p>
									<a href="/" className="footer__link">
										Металлоконструкции
									</a>
								</p>
								<p>
									<a href="/" className="footer__link">
										Металлообработка
									</a>
								</p>
							</div>
							<div className="footer-services__col">
								<p>
									<a href="/" className="footer__link">
										Раскрой металла
									</a>
								</p>
								<p>
									<a href="/" className="footer__link">
										Конструкторское бюро{' '}
									</a>
								</p>
								<p>
									<a href="/" className="footer__link">
										Аренда техники
									</a>
								</p>
								<p>
									<a href="/" className="footer__link">
										Ремонт техники
									</a>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div className="footer__col-right">
					<div className="footer__contacts">
						<h3 className="footer__title">Контактная информация</h3>
						<div className="footer__contacts-wrap">
							<address className="footer__contacts-address">
								<p>Заводская улица, 2 В, Буча,</p>
								<p>Киевская область, 08292</p>
							</address>

							<div className="footer__contacts-work-time">
								<p>
									<span>ПН - ПТ:</span> 09:00 - 18:00
								</p>
								<p>
									<a href="tel:+380971234567">+38(097)123-45-67</a>
								</p>
							</div>

							<ul className="social-networks">
								<li className="social-networks__item">
									<a href="/">
										<img src={facebookIcon} alt="facebook" />
									</a>
								</li>
								<li className="social-networks__item">
									<a href="/">
										<img src={instagramIcon} alt="instagram" />
									</a>
								</li>
								<li className="social-networks__item">
									<a href="/">
										<img src={youtubeIcon} alt="youtube" />
									</a>
								</li>
							</ul>
						</div>

						<div className="developed-by">
							Developed by <br /> Stubbs
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
