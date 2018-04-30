import React, { Component } from 'react';
 
import AdItem from './AdItem.js';
import { Typography } from 'rmwc/Typography';
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import { CardMedia } from 'rmwc/Card';


export default class Grid extends Component {

	constructor(props) {
		super(props); 
		this.state = {
			modal: false, 
			item: {}
		}; 

		this.toggle = this.toggle.bind(this); 
	}

	toggle(item) {
  		this.setState({
  			modal: !this.state.modal, 
  			item: item
  		});  	}

	getAdItem() {
	    return [
	      { _id: 1, headline: 'VW Cheats the Test', year: 2015, industry: 'Automotive', description: 'The International Council on Clean Transportation found in 2015 that Volkswagon had been cheating the United States disesel emissions test. It was determined that VW had developed a software would enable the "full emission-control systems" when the car was being tested, thus appearing to be "clean". Without the emission control on, the car was said to produce 40 times the standard nitrogen oxide emission. The Federal Trade Commission sued Volkswagon for misleading advertising of "Clean Diesel" vehicles. According to the FTC, Volkswagon decieved their customers for 7 years, claiming over 5 million desiel vehicles worldwide under the guise of "low-emission, environmentally friendly". As a result of the suit, CEO Martin Winkerton stepped down from his position.', img: ["https://amp.businessinsider.com/images/5615493cbd86ef18008c00c4-1920-1440.jpg"], relLinks: ["http://www.businessinsider.com/heres-what-volkswagen-did-and-how-they-got-caught-2015-9?r=UK&IR=T"]},
	      { _id: 2, headline: 'Activa\'s "Clinical" Lie', year: 2010, industry: 'Food', description: 'In 2010 the Federal Trade Commission sued The Dannon Company for deceptive advertising of their DanActive dairy drink. According to advertising on the label as well as in print, TV and radio, Dannon claimed the drink was scientifically proven to help prevent colds and the flu as well as relieve intestinal irregularity. In a television ad featuring a famous celebrity, Dannon claimed that the drink was “clinically proven to help regulate your digestive system in two weeks”. The FTC successfully proved that Dannon had no scientific evidence that their dairy drink helped “regulate your digestive system”, or that it prevented the flu or cold symptoms.', img: ["https://foodtruthfreedom.files.wordpress.com/2015/12/activia.jpg?w=820"], relLinks: ["https://www.ftc.gov/news-events/press-releases/2010/12/dannon-agrees-drop-exaggerated-health-claims-activia-yogurt"]},
	      { _id: 3, headline: 'Sears', year: 2013, industry: 'Textiles', description: 'Sears, Roebuck and Company, the department store chain colloquially known as Sears, agreed to pay $475,000 for violating the Textile Products Identification Act in 2013. Sears had received warnings from the FTC in 2010 for labelling its “100% Pure Bamboo” line of products. Instead of bamboo, these products were made using rayon- a synthetic cellulose fiber. Advertising the products as made out of bamboo suggested that they were “green” and environment friendly.  In reality, rayon is manufactured using toxic chemicals in a process known for its hazardous byproducts. The implication that such products were environment friendly with underlying damaging processes clearly misleads consumers and violates their right to knowledge of the products they are purchasing. Despite the warning in 2010, Sears did not alter its marketing strategy until the company reached a settlement with the FTC in 2013. Macy’s and Amazon were also fined, though lesser sums, for the same violation, totaling $1.3 million in fines.', img: ["http://i.dailymail.co.uk/i/pix/2013/01/08/article-2259017-16CF8274000005DC-799_306x269.jpg"], relLinks: ["http://time.com/107224/misleading-products/"]},
	      { _id: 4, headline:'Kellogg', year:2011, industry: 'Food', year: 2011, description: 'Kellogg agreed to a $4 million settlement with the FTC in 2011 surrounding the false advertising of their Frosted Mini Wheats cereal. Kellogg, the world\'s largest cereal producer, claimed the breakfast food was "clinically shown to improve kids\' attentiveness by nearly 20%". According to the complaint by the FTC, the study on child "attentiveness" only yielded a 20% increase in attentiveness in 1 out of every 9 children tested, and only 50% of the children participating in the study showed any changes in attentiveness. Following the settlement, Kellogg has dropped the advertising campaign and since adjusted the claims made about health and focus.', img: ["http://media.cleveland.com/taste_impact/photo/frostedjpg-94cc5b1de550cf7b_medium.jpg"], relLinks: ["https://www.ftc.gov/news-events/press-releases/2009/04/kellogg-settles-ftc-charges-ads-frosted-mini-wheats-were-false"]},
	      {_id: 5, headline:'Lumos Lab', year: 2016, industry: 'Technology', description: 'Luminosity, the popular gaming application designed and marketed as "brain training", has agreed to a $2 million settlement with the FTC. According Luminosity, by playing mobile app game for 10 to 15 minutes up to four times a week, consumers could expect an improvement in everyday tasks in school, work life as well as athletics. The company also claimed that the games reduced "age-related cognitive decline" and protect against dementia and Alzheimer\'s disease. The company not only advertised in traditional manners such as television, radio, and print, but also increased traffic to their website by purchasing keywords such as memory, cognition, dementia and Alzheimer\'s through Google\'s AdWords. It was found that Lumos Lab had failed to gather sufficient scientific evidence surrounding their claims of improved mental health benefits. Following the settlement, Lumos Lab has agreed to publicly display their scientific finding as they relate to their popular mobile applications.', img: ["https://2.bp.blogspot.com/-9m2JCqjWdd0/WgYAjAQHyYI/AAAAAAAAJ_o/v6t-PXSihBYxs5kfxj1Kfn86VCRYjQNwQCLcBGAs/s1600/lumosity_9y3c.1280.jpg"], relLinks: ["https://www.ftc.gov/news-events/press-releases/2016/01/lumosity-pay-2-million-settle-ftc-deceptive-advertising-charges"]},
	      {_id: 6, headline:'Costa Del Mar', year: 2018, industry: 'Apparel', description: 'Costa Del Mar is being sued for the misleading advertising of the warranty on their popular fishing sunglasses. The warranty boasts a "backed for life" label and additionally claims "no gimmick" and "no disclaimers". The warranty is labeled on every box of sunglasses sold as well as on their website. Written into the "backed for life" warranty, Costa includes the right of a "nominal fee". It was determined, however, that "nominal fee" for repairs totaled more than $200 for consumers, depending on the damage the glasses sustained. The inclusion of "nomical fees" allows for the popular manufacturer the ability to include repair and replacement fees, however, the "backed for life" warranty leads the consumer to believe the sunglasses maintain a true warranty without excess fees included. Ironically, the "no gimmick" claim of the popular sunglasses company is, in fact, a gimmick, designed to deceive consumers. Costa Del Mar is currently in a class-action lawsuit in the state of Texas surrounding the deceptive advertising of their "backed for life" warranty.', img: ["https://ssli.ebayimg.com/images/g/4K0AAOSw~o5aV8c1/s-l1600.jpg"], relLinks: ["https://www.truthinadvertising.org/wp-content/uploads/2018/04/Burden-v-Costa-Del-Mar-complaint.pdf"]}, 
	      {_id: 7, headline:'L\'Oreal', year: 2014, industry: 'Cosmetics', description: 'In 2014, the popular cosmetic company, L\'Oreal settled a lawsuit with the FTC surrounding false advertising of an anti-aging skin care product: L\'Oreal Paris You Code skincare. According to the cosmetic brand whose advertisements were aired in print, on radio, television as well as through the internet and various social media outlets, the lotion had the ability to "boost genes\' activity and stimulate the production of youth proteins". The FTC would that these claims were not only false and unsubstantiated by any clinical research, despite the "clinically proven" tag line used in the advertising. The cosmetic brand aired the advertisements in both English and Spanish.', img: ["https://www.ftc.gov/system/files/attachments/press-releases/loreal-settles-ftc-charges-alleging-deceptive-advertising-anti-aging-cosmetics/loreal-ad-full.jpg"], relLinks: ["https://www.ftc.gov/news-events/press-releases/2014/06/loreal-settles-ftc-charges-alleging-deceptive-advertising-anti"]},
	      {_id: 8, headline:'Vibram Agrees to Settle Class Action Lawsuit', year:2014, industry: 'Apparel', description: 'Vibram USA, the company that makes the Vibram FiveFinger, a close-fitting shoe attempting to mimic a bare foot, agreed to settle a class action lawsuit in 2014 that accused the company of making unsubstantiated claims on the health benefits of its footwear. The company gained market share with a spike in the popularity of minimalist running gear and experienced soaring sales with the pictured advertisement campaign “5 reasons to wear or train in Vibram FiveFingers”. In this campaign, the company listed various health benefits, including strengthened muscles and injury prevention for consumers. These claims were, however, unsubstantiated and discontinued after the court settlement, under which Vibram agreed to refund customers who bought its shoes. The total settlement amounted to $3.75 million. Despite reaching the settlement, Vibram issued a statement denying any malpractice: “Vibram expressly denied and continues to deny any wrongdoing alleged in the Actions, and neither admits nor concedes any actual or potential fault”.', img: ["https://i.pinimg.com/236x/b2/a3/85/b2a3859a9791e317cc4f08db6335382a--vibram-shoes-toe-socks.jpg"], relLinks: ["https://www.nbcnews.com/business/consumer/vibram-fivefinger-shoes-give-refunds-over-allegedly-bare-health-claims-n101301"]}, 
	      {_id: 9, headline:'Class Action Targets Emergen-C Maker for False Advertising', year:2013, industry: 'Food', description: 'Alacer corporation, the parent company which owns the dietary supplement Emergen-C, reached a $6.5 million settlement in late 2013 over its misleading claims that the supplement boosts energy, the immune system, and metabolism. These claims, imaged on the side of the product box, were indeed unsubstantiated and had no scientific evidence supporting them. This settlement provided reimbursement to individuals who had consumed Emergen-C from June of 2006 to February of 2012, while these claims were included on the box. The complaint filed against Alacer alleges that the company misleadingly represents that the supplement will reduce the risk of colds and flu without scientific evidence. This deceptive marketing occurred for 6 years before being addressed.', img: ["https://i1.wp.com/images-na.ssl-images-amazon.com/images/I/51Qp%2BZRRxCL.jpg?w=696&ssl=1"], relLinks: ["https://topclassactions.com/lawsuit-settlements/closed-settlements/13271-emergen-c-class-action-lawsuit-settlement/"]}, 
	      {_id: 10, headline:'Coles SuperMarket', year: 2015, industry: 'Food', description: 'Coles, one of the largest supermarket chains in Australia, was recently fined $2.5 million for misleading advertising of their baked goods. The slogan "Baked Today, Sold Today" and "Freshly Baked in Store" were branded in stores and labeled on all baked goods sold. It was determined by the Australian Federal Court, however, that the baked goods had been partially baked and frozen off-site before being shipped to stores to finish the baking process. In a statement following the accusation, Coles claimed they did not "deliberately set out to mislead anybody", yet the campaign demonstrates an attempt to attract consumers under the assumption of in-store, freshly baked goods. The claim "freshly baked in stores" misleads customers to believe goods are freshly baked from scratch in stores on a daily basis, despite being partially baked and frozen off-site. The deceptive slogan gives Coles an unfair competitive advantage over competitors, specifically small, independently owned bakeries that specialize in freshly baked goods daily. The Australian Competition and Consumer Commission reported the supermarket chain had been using the "Baked Today, Sold Today" slogan as well as other for three years in over 600 different stores across the country. In addition to the fine of $2.5m, Coles since removed the slogans from all stores and packaging.', img: ["https://www.productsafety.gov.au/system/files/coles%20cookie.jpg"], relLinks: ["https://mumbrella.com.au/coles-fined-2-5m-for-misleading-advertising-on-claims-bread-products-were-baked-today-286555"]}, 
	      {_id: 11, headline:'Nissan, TBWA Settle with FTC Over \'Faked\' Commercial', year: 2014, industry: 'Automotive', description: 'In 2014, Nissan North American and its advertising company, TBWA Worldwide reach a settlement with the FTC over a 30 second commercial, “Hill Climb”, which had misleading implications of the Nissan Frontier\’s capabilities. In the commercial, a Frontier pushes a stranded dune buggy up a steep sand dune. In reality, the truck and dune buggy were towed up the incline using cables. The video was filmed in a style that made it appear homemade, contributing to the realistic nature of the commercial. Despite a small disclaimer in print, saying “Fictionalization. Do not attempt.”, the FTC maintained that the company cannot use misleading demonstrations to misrepresent what its product can do. Neither Nissan North American nor TBWA Worldwide were forced to pay fines in this settlement, but the advertisement campaign was altered to reflect the car’s actual capabilities.', img: ["https://i.ytimg.com/vi/qlB--MKzlgM/maxresdefault.jpg"], relLinks: ["https://www.youtube.com/watch?v=qlB--MKzlgM", "http://adage.com/article/news/nissan-tbwa-settle-ftc-faked-commercial/291269/"]}
	    ];
  	}

  	renderItems() {
	    return this.getAdItem().map((item) => (
	      <AdItem key={item._id} item={item} onClick={this.toggle.bind(this, item)} />
	    ));
	}

	render () {
		return (
			<div>
				{this.renderItems()}
				<Modal isOpen={this.state.modal} toggle={this.toggle} size='lg'>
		          <ModalHeader toggle={this.toggle}>
		          	<div className='expanded-main-img-container'>
		          		<img src={this.state.item.img} className='expanded-main-img' /> 
		          	</div>
		          </ModalHeader>
		          <ModalBody>
		          	<Typography use="display2" tag="h1">
		          		{this.state.item.headline}
		          		<Typography
					        use="headline"
					        theme="text-secondary-on-background"
					        component='span'
					        style={{marginLeft: '0.5rem'}}
					        >
					      	{String(this.state.item.year) + " | " + this.state.item.industry}
			      		</Typography>
		          	</Typography>
		          	<Typography use="body2" tag="div">{this.state.item.description}</Typography>
		          	<div className="relevant-links-container">
		          		<Typography use="title"> Relevant Links </Typography> 
		          		<ul> 
		          			<li> <a href={this.state.item.relLinks}> {this.state.item.relLinks} </a> </li>
		          		</ul>
		          	</div> 
		          </ModalBody>
	        	</Modal>
			</div>
		)
	}
}