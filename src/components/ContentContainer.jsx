import TopNavigation from "./TopNavigation"
import { BsPlusCircleFill } from 'react-icons/bs';

function ContentContainer() {
    return (
        <div className="content-container">
            <TopNavigation />
            <div className="content-list">
                <Post
                    name='Ada'
                    timestamp='one week ago'
                    text={`If you had $10 million, would you still be working/going to school?`}
                />
                <Post
                    name='Leon'
                    timestamp='three week ago'
                    text={`How has the education you received changed your life? How have your goals changed over your life?`}
                />
                <Post
                    name='Jhill'
                    timestamp='5 days ago'
                    text={`The robot clicked disapprovingly, gurgled briefly inside its cubical interior and extruded a pony glass of brownish liquid. "Sir, you will undoubtedly end up in a drunkard's grave, dead of hepatic cirrhosis," it informed me virtuously as it returned my ID card.`}
                />
                <Post
                    name='Laura'
                    timestamp='5 days ago'
                    text={`What was the last song you listened to?`}
                />
                <Post
                    name='Creg'
                    timestamp='3 days ago'
                    text={`She was infatuated with color. She didn't have a favorite color per se, but she did have a fondness for teals and sea greens.`}
                />
                <Post
                    name='Kent'
                    timestamp='2 days ago'
                    text={`They say you only come to peace with yourself when you know yourself better than those around you. Derick knew nothing about this.`}
                />
                <Post
                    name='Kent'
                    timestamp='10 hour ago'
                    text={`There was nothing to indicate Nancy was going to change the world. She looked like an average girl going to an average high school. It was the fact that everything about her seemed average that would end up becoming her superpower.`}
                />
                <Post
                    name='Ben'
                    timestamp='6 hour ago'
                    text={`You know that tingly feeling you get on the back of your neck sometimes? I just got that feeling when talking with her. You know I don't believe in sixth senses, but there is something not right with her.`}
                />
                <Post
                    name='Klenty'
                    timestamp='3 hour ago'
                    text={`It wasn't quite yet time to panic. There was still time to salvage the situation. At least that is what she was telling himself. `}
                />
                <Post
                    name='Kon'
                    timestamp='12 minutes ago'
                    text={`She didn't understand how changed worked. When she looked at today compared to yesterday, there was nothing that she could see that was different.`}
                />

            </div>
            <BottomBar />
        </div>
    )
}

const Post = ({ name, timestamp, text }) => {
    const seed = Math.round(Math.random() * 100);
    return (
        <div className={'post'}>
            <div className="avatar-wrapper">
                <img src={`https://avatars.dicebear.com/api/micah/${seed}.svg`} alt="avatar" className="avatar" />
            </div>

            <div className="post-content">
                <p className="post-owner">
                    {name}
                    <small className="timestamp">{timestamp}</small>
                </p>
                <p className="post-text">{text}</p>
            </div>
        </div>
    )
}

const BottomBar = () => (
    <div className="bottom-bar">
        <BsPlusCircleFill size="22" className="text-green-500 dark:shadow-lg mx-2 dark:text-primary" />
        <input className="bottom-bar-input" type='text' placeholder="Enter message..." />
    </div>
)


export default ContentContainer