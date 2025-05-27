document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('loadButton').addEventListener('click', async function() {
        try {
            const response = await fetch('prophets.json');
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
            const data = await response.json();
            const template = document.getElementById('prophet-card');
            const container = document.querySelector('.cards-container');
            
            container.innerHTML = '';
            
            data.prophets.forEach(prophet => {
                const clone = document.importNode(template.content, true);
                const card = clone.querySelector('.prophet-card');
                card.querySelector('.profile').src = prophet.imageurl;
                card.querySelector('.profile').alt = `${prophet.name} ${prophet.lastname}`;
                card.querySelector('.fullname').textContent = `${prophet.name} ${prophet.lastname}`;
                card.querySelector('.birthdate span').textContent = prophet.birthdate;
                card.querySelector('.birthplace span').textContent = prophet.birthplace;
                container.appendChild(clone);
            });
            
            this.disabled = true;
            this.textContent = 'Prophets Loaded';
        } catch (error) {
            console.error("Error:", error);
            document.getElementById('loadButton').textContent = 'Error Loading Prophets';
        }
    });
});