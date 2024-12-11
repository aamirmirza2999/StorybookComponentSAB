const fs = require('fs');
const axios = require('axios');

const FIGMA_TOKEN = 'your_figma_personal_access_token';
const FILE_KEY = 'your_figma_file_key'; // Found in the Figma file URL

const fetchTokens = async () => {
  try {
    const response = await axios.get(`https://api.figma.com/v1/files/${FILE_KEY}`, {
      headers: { Authorization: `Bearer ${FIGMA_TOKEN}` },
    });

    const tokens = response.data; // Adjust based on API response structure
    fs.writeFileSync('./constants/figmaTokens.json', JSON.stringify(tokens, null, 2));
    console.log('Tokens updated!');
  } catch (error) {
    console.error('Error fetching tokens:', error);
  }
};

fetchTokens();
