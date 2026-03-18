// Select the image by its ID
const mainImage = document.getElementById('mainImage');
const caption = document.getElementById('caption');
// Array of slides (10 images)
const slides = [
	{ src: 'images/image01.jpg',
	 alt: 'Secrets BTS',
	 caption: '"Secrets" - Director',
	 color: 'white'
	},
	{ src: 'images/image02.jpg',
	 alt: 'Wet Cello BTS',
	 caption: '"Wet Cello" - BTS photographer',
	 color: 'white',
	 position: "50% 25%"
	},
	{ src: 'images/image03.jpg',
	 alt: 'AMAC BTS 1',
	 caption: '"Ask Me About College" - Sound recordist/Editor/Camera operator',
	 color: 'white'
	},
	{ src: 'images/image04.jpg',
	alt: 'The Interview BTS',
	caption: '"The Interview" - Director of Photography',
	color: 'white'
	},
	{ src: 'images/image05.jpg',
	alt: 'People BTS 1',
	caption: '"The People I Talk To" - Gaffer',
	color: 'white'
	},
	{ src: 'images/image06.jpg',
	 alt: 'People BTS 2',
	 caption: '"The People I Talk To" - Gaffer',
	 color: 'white'
	},
	{ src: 'images/image07.jpg',
	 alt: 'AMAC BTS 2',
	 caption: '"Ask Me About College" - Sound recordist/Editor/Camera operator',
	 color: 'white'
	},
	{ src: 'images/image08.jpg',
	 alt: 'AMAC BTS 3',
	 caption: '"Ask Me About College" - Sound recordist/Editor/Camera operator',
	 color: 'white'
	},
	{ src: 'images/image09.jpg',
	alt: 'AMAC BTS 4',
	caption: '"Ask Me About College" - Sound recordist/Editor/Camera operator',
	color: 'white',
	position: "50% 30%"
	},
	{ src: 'images/image10.jpg',
	alt: 'Sturgeon BTS',
	caption: '"Sturgeon Stories" - Camera Operator/Interviewer',
	color: 'white'
	}
];

let currentIndex = 0;
// Preload images
slides.forEach(({ src }) => {
const i = new Image();
i.src = src;
});

// Helper to show slide
function showSlide(index) {
const slide = slides[index];
mainImage.src = slide.src; // replaces the image
mainImage.alt = slide.alt; // replaces the alt of the image
caption.textContent = slide.caption; // updates caption text
caption.style.color = slide.color || "black";
mainImage.style.objectPosition = slide.position || "center";
}

// Advance on click
function nextSlide() {
currentIndex = (currentIndex + 1) % slides.length;
showSlide(currentIndex);
}
// Initialize
showSlide(currentIndex);
mainImage.addEventListener('click', nextSlide);