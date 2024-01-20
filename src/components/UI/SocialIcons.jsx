import { SocialIcon } from 'react-social-icons';

function SocialIcons({ urls }) {

    return (
        <div className="social-icons">

            {urls.map((address) => {
                console.log(address);
                // A return inside of the map function is needed to return the JSX elements.
                // Each list item needs a unique key. The address is used for this purpose.
                return (
                    address.includes('github') ? (
                        <SocialIcon bgColor="blue" key={address} url={address} />
                    ) : (
                        <SocialIcon key={address} url={address} />
                    )
                );
            })}
        </div>
    );
};

export default SocialIcons;