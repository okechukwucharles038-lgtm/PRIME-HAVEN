// Virtual Tour Data - Replace image URLs with your 360° images
const roomsData = {
    lobby: {
        title: 'Main Lobby',
        description: 'Welcome to our stunning main lobby featuring modern architecture and elegant design. This spacious entrance sets the tone for the rest of the building with high ceilings and natural lighting.',
        image: 'https://via.placeholder.com/1920x1080?text=Lobby+360+Image'
    },
    living: {
        title: 'Living Room',
        description: 'Our luxurious living room offers panoramic views and comfortable seating areas. Perfect for relaxation and entertainment with modern furnishings and ambient lighting.',
        image: 'https://via.placeholder.com/1920x1080?text=Living+Room+360+Image'
    },
    kitchen: {
        title: 'Kitchen',
        description: 'State-of-the-art kitchen equipped with premium appliances and ample counter space. This modern culinary space is designed for both functionality and style.',
        image: 'https://via.placeholder.com/1920x1080?text=Kitchen+360+Image'
    },
    bedroom: {
        title: 'Master Bedroom',
        description: 'Spacious master bedroom with elegant decor and plenty of natural light. Features a comfortable bed setup and adequate storage solutions for a restful retreat.',
        image: 'https://via.placeholder.com/1920x1080?text=Bedroom+360+Image'
    },
    bathroom: {
        title: 'Bathroom',
        description: 'Modern bathroom with high-end fixtures and spa-like ambiance. Complete with shower, bathtub, and marble finishes for a luxurious experience.',
        image: 'https://via.placeholder.com/1920x1080?text=Bathroom+360+Image'
    },
    gym: {
        title: 'Fitness Center',
        description: 'Fully equipped fitness center with various workout machines and equipment. An excellent space for maintaining your health and wellness routine.',
        image: 'https://via.placeholder.com/1920x1080?text=Gym+360+Image'
    }
};

// Initialize Pannellum viewer
let panorama;

function initPanorama(roomKey) {
    const room = roomsData[roomKey];
    
    if (panorama) {
        panorama.destroy();
    }
    
    panorama = pannellum.viewer('panorama', {
        'type': 'equirectangular',
        'panorama': room.image,
        'autoLoad': true,
        'autoRotate': -2,
        'autoRotateInactivity': 3000,
        'mouseZoom': true,
        'showControls': true,
        'pitch': 0,
        'yaw': 0,
        'hfov': 100
    });
    
    updateRoomInfo(roomKey);
}

function updateRoomInfo(roomKey) {
    const room = roomsData[roomKey];
    const roomDetails = document.getElementById('room-details');
    roomDetails.innerHTML = `
        <h4>${room.title}</h4>
        <p>${room.description}</p>
    `;
}

// Room button event listeners
document.querySelectorAll('.room-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Remove active class from all buttons
        document.querySelectorAll('.room-btn').forEach(btn => {
            btn.classList.remove('active');
        });
        
        // Add active class to clicked button
        this.classList.add('active');
        
        // Initialize panorama with selected room
        const roomKey = this.getAttribute('data-room');
        initPanorama(roomKey);
    });
});

// Initialize with default room (lobby) on page load
document.addEventListener('DOMContentLoaded', function() {
    initPanorama('lobby');
});
