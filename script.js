// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    const balloons = document.querySelectorAll('.balloon');
    const confettiContainer = document.getElementById('confettiContainer');
    const sparklesContainer = document.getElementById('sparklesContainer');
    const starsContainer = document.getElementById('starsContainer');
    const celebrationMessage = document.getElementById('celebrationMessage');
    const subtitle = document.getElementById('subtitle');
    let balloonsPopped = 0;
    const totalBalloons = balloons.length;
    
    // Create stars background
    function createStars() {
        const starCount = 50;
        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.className = 'star';
            star.style.left = Math.random() * 100 + '%';
            star.style.top = Math.random() * 100 + '%';
            star.style.animationDelay = Math.random() * 3 + 's';
            star.style.animationDuration = (Math.random() * 2 + 2) + 's';
            starsContainer.appendChild(star);
        }
    }
    
    createStars();
    
    // Balloon click interaction
    balloons.forEach((balloon, index) => {
        balloon.addEventListener('click', function() {
            if (!balloon.classList.contains('popped')) {
                popBalloon(balloon, index);
            }
        });
    });
    
    function popBalloon(balloon, index) {
        balloon.classList.add('popped');
        balloonsPopped++;
        
        // Create sparkles at balloon position
        createSparkles(balloon);
        
        // Create confetti
        createConfetti(balloon);
        
        // Update subtitle
        if (balloonsPopped === 1) {
            subtitle.textContent = 'Keep going! Pop all the balloons! 🎈';
            subtitle.style.animation = 'fadeInUp 0.5s ease';
        }
        
        // Check if all balloons are popped
        if (balloonsPopped === totalBalloons) {
            setTimeout(() => {
                celebrate();
            }, 500);
        }
    }
    
    function createSparkles(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const sparkleCount = 15;
        
        for (let i = 0; i < sparkleCount; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.style.left = centerX + (Math.random() - 0.5) * 100 + 'px';
            sparkle.style.top = centerY + (Math.random() - 0.5) * 100 + 'px';
            sparkle.style.animationDelay = Math.random() * 0.3 + 's';
            sparkle.style.animationDuration = (Math.random() * 0.5 + 1.5) + 's';
            
            // Random colors
            const colors = ['#FF6B9D', '#C084FC', '#60A5FA', '#FCD34D', '#FFFFFF'];
            sparkle.style.background = colors[Math.floor(Math.random() * colors.length)];
            
            sparklesContainer.appendChild(sparkle);
            
            setTimeout(() => {
                if (sparkle.parentNode) {
                    sparkle.remove();
                }
            }, 3000);
        }
    }
    
    function createConfetti(element) {
        const rect = element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const colors = ['#FF6B9D', '#C084FC', '#60A5FA', '#FCD34D', '#FB7185', '#F9A8D4', '#A78BFA'];
        const confettiCount = 30;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = centerX + (Math.random() - 0.5) * 200 + 'px';
            confetti.style.top = rect.top + 'px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.3 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2.5) + 's';
            confetti.style.width = (Math.random() * 10 + 8) + 'px';
            confetti.style.height = (Math.random() * 10 + 8) + 'px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            // Random horizontal movement
            const randomX = (Math.random() - 0.5) * 300;
            confetti.style.setProperty('--random-x', randomX + 'px');
            
            confettiContainer.appendChild(confetti);
            
            // Animate with random X movement
            confetti.style.animation = `confettiFallWithX ${confetti.style.animationDuration} linear forwards`;
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 6000);
        }
    }
    
    function celebrate() {
        // Create massive confetti
        createMassiveConfetti();
        
        // Show celebration message
        const messages = [
            "🎉 Happy Birthday Bhavika! 🎉",
            "✨ Wishing you the most amazing day! ✨",
            "🌟 May all your dreams come true! 🌟",
            "💫 Here's to another wonderful year! 💫"
        ];
        
        const randomMessage = messages[Math.floor(Math.random() * messages.length)];
        celebrationMessage.textContent = randomMessage;
        celebrationMessage.style.background = 'linear-gradient(135deg, #FF6B9D 0%, #C084FC 50%, #60A5FA 100%)';
        celebrationMessage.style.webkitBackgroundClip = 'text';
        celebrationMessage.style.webkitTextFillColor = 'transparent';
        celebrationMessage.style.backgroundClip = 'text';
        celebrationMessage.classList.add('show');
        
        // Update subtitle
        subtitle.textContent = '🎊 You did it! Have an amazing birthday! 🎊';
        subtitle.style.fontSize = '1.6rem';
        subtitle.style.fontWeight = '600';
        subtitle.style.background = 'linear-gradient(135deg, #FF6B9D 0%, #C084FC 50%, #60A5FA 100%)';
        subtitle.style.webkitBackgroundClip = 'text';
        subtitle.style.webkitTextFillColor = 'transparent';
        subtitle.style.backgroundClip = 'text';
        subtitle.style.opacity = '1';
    }
    
    function createMassiveConfetti() {
        const colors = ['#FF6B9D', '#C084FC', '#60A5FA', '#FCD34D', '#FB7185', '#F9A8D4', '#A78BFA', '#34D399'];
        const confettiCount = 200;
        
        for (let i = 0; i < confettiCount; i++) {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.top = '-20px';
            confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 1 + 's';
            confetti.style.animationDuration = (Math.random() * 3 + 3) + 's';
            confetti.style.width = (Math.random() * 12 + 10) + 'px';
            confetti.style.height = (Math.random() * 12 + 10) + 'px';
            confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '0';
            confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
            
            confettiContainer.appendChild(confetti);
            
            setTimeout(() => {
                if (confetti.parentNode) {
                    confetti.remove();
                }
            }, 8000);
        }
    }
    
    // Add confetti animation with X movement
    const style = document.createElement('style');
    style.textContent = `
        @keyframes confettiFallWithX {
            to {
                transform: translateY(100vh) translateX(var(--random-x, 0)) rotate(720deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
    
    // Add interactive wish cards
    const wishCards = document.querySelectorAll('.wish-card');
    wishCards.forEach((card, index) => {
        card.addEventListener('click', function() {
            card.style.transform = 'scale(0.95)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
            
            // Create sparkles on card click
            createSparkles(card);
        });
    });
});
