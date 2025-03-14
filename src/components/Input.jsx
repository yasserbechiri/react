export default function Input({ placeHolder }) {
    return (
        <input
            type="text"
            className="font-fragment border-[#46464640] text-[#464646] border rounded-full p-4 focus:outline-none focus:border-black/60"
            placeholder={placeHolder}
            aria-label={placeHolder}
        />
    );
}
