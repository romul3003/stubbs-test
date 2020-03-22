import React from 'react'
import './OurCompany.scss'

const OurCompany = () => {
	return (
		<section className="our-company">
			<h2 className="our-company__title title">Наша компания</h2>
			<ul className="our-company__reasons">
				<li className="our-company__reason reason">
					<div className="reason__text-layer">
						<h2 className="reason__title">Почему мы?</h2>
						<p className="reason__text">
							Люди – профессионалы с большим опытом работы. Полный спектр работ по
							металлообработке в одном месте – комплексный индивидуальный подход.
							Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание
							промышленного
						</p>
					</div>
				</li>

				<li className="our-company__reason reason">
					<div className="reason__text-layer">
						<h2 className="reason__title">Наши преимущества</h2>
						<p className="reason__text">
							Люди – профессионалы с большим опытом работы. Полный спектр работ по
							металлообработке в одном месте – комплексный индивидуальный подход.
							Конструкторский отдел. Логистика. Многолетний опыт машиностроения – создание
							промышленного
						</p>
					</div>
				</li>
			</ul>
		</section>
	)
}

export default OurCompany
