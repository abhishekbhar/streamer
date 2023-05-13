# streamer
The application provides basic streaming service similar to youtube/twitch. Users can signup using google oauth and can use any RTP client application like OBS studio to stream contents onto the platform.



Steps to run the application
1. Clone the repository
    git clone git@github.com:abhishekbhar/streamer.git
    
3. Install dependencies
    API        -- cd api && npm install 
    CLIENT     -- cd client && npm install
    RTP SERVER -- cd rtpserver && npm install
    
5. Start the application
    npm start
    
    

Common Urls
API      -- http://localhost:3001
CLIENT   -- http://localhost:3000
RTP SERVER -- http://localhost:1935 (RTP) http://localhost:8000 (HTTP)


OBS Studio
https://obsproject.com/


