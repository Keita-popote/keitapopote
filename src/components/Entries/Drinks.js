import React from 'react';
import jusGimgembre from '../../images_png/0A-GIMGEMBRE-2.png';
import jusBissap from '../../images_png/0A-BISSAP-2.png';
import { Section } from './DrinksStyles';

export default function Drinks() {
	const data = [
		{
			image: jusGimgembre,
			name: 'Jus de Gimgembre',
			description: 'Gimgembre , citron , sucre et menthe',
			price: '2 €',
		},

		{
			image: jusBissap,
			name: 'Jus de Bissap',
			description: 'Hibiscus , citron , sucre et menthe',
			price: '2 €',
		},
	];
	return (
		<Section>
			<div className='title'>
				<h1>
					Nos <span>Boissons</span>
				</h1>
			</div>
			<div className='products'>
				{data.map((product) => {
					return (
						<div className='product' key={product.name}>
							<div className='image'>
								<img  src={product.image} alt='drink' />
							</div>
							<h2>{product.name}</h2>
							<h3>{product.price}</h3>
							<p>{product.description}</p>
						</div>
					);
				})}
			</div>
		</Section>
	);
}

