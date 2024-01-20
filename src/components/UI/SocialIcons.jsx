import { SocialIcon } from 'react-social-icons';

function SocialIcons({ urls }) {

    // console.log(`The urls prop is: ${urls}`);

    return (
        <div className="social-icons">

            {urls.map((address) => {
                console.log(address);
                // A return inside of the map function is needed to return the JSX elements.
                // Each list item needs a unique key.  The address is used for this purpose.
                return (
                        <SocialIcon key={address} url={address} />
                )
            }
            )}
        </div>
    );
};

export default SocialIcons;