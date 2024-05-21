import ButtonOutline from "./ButtonOutline";

const LoginButton = () => {
    return (
        <ButtonOutline className="w-10 h-10 p-2 min-h-0 fill-primary hover:fill-primary-content bg-base-100">
            <svg viewBox="0 0 15 15">
                <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.489258 14.5108C0.815918 14.8369 1.20825 15 1.66675 15H6.66675C6.90283 15 7.10083 14.92 7.26074 14.76C7.42017 14.6005 7.5 14.4028 7.5 14.1667C7.5 13.9305 7.42017 13.7328 7.26074 13.5733C7.10083 13.4133 6.90283 13.3333 6.66675 13.3333H1.66675V1.66669H6.66675C6.90283 1.66669 7.10083 1.58667 7.26074 1.4267C7.42017 1.26721 7.5 1.06946 7.5 0.833313C7.5 0.597229 7.42017 0.39917 7.26074 0.239197C7.10083 0.0797119 6.90283 0 6.66675 0H1.66675C1.20825 0 0.815918 0.163086 0.489258 0.489197C0.163086 0.815857 0 1.20831 0 1.66669V13.3333C0 13.7917 0.163086 14.1841 0.489258 14.5108ZM9.375 11.0625C9.52759 10.882 9.604 10.6769 9.604 10.4475C9.604 10.3452 9.58862 10.2504 9.55811 10.1633C9.52051 10.0555 9.45947 9.95947 9.375 9.875L7.83325 8.33331H13.8125C13.9595 8.33331 14.0916 8.30237 14.2087 8.24042C14.2798 8.20282 14.3455 8.15381 14.4058 8.09332C14.5657 7.9339 14.6458 7.73608 14.6458 7.5C14.6458 7.26392 14.5657 7.06586 14.4058 6.90582C14.3396 6.8396 14.2668 6.78717 14.1873 6.74847C14.0754 6.69397 13.9504 6.66669 13.8125 6.66669H7.83325L9.375 5.125C9.5415 4.95831 9.625 4.76056 9.625 4.53168C9.625 4.42151 9.60571 4.3186 9.56738 4.22296C9.52588 4.11932 9.46167 4.02417 9.375 3.9375C9.22217 3.77081 9.03101 3.6875 8.80151 3.6875C8.57275 3.6875 8.38184 3.76392 8.229 3.91669L5.229 6.91669C5.14575 7 5.08667 7.09027 5.05151 7.1875C5.01709 7.28473 5 7.38892 5 7.5C5 7.61108 5.01709 7.71527 5.05151 7.8125C5.08667 7.90973 5.14575 8 5.229 8.08331L8.229 11.0833C8.40967 11.2639 8.60742 11.3436 8.82251 11.3225C8.9585 11.3096 9.08179 11.2703 9.19263 11.2048C9.25781 11.1664 9.3186 11.119 9.375 11.0625Z"
                />
            </svg>
        </ButtonOutline>
    );
};

export default LoginButton;
