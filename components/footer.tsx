export default function Footer() {
    return (
        <footer className=" text-gray-600 py-6 mt-12">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Owned by Keyy</p>
                <div className="flex gap-4 mt-2 md:mt-0 text-sm">
                    <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                    <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    <a href="https://github.com/K3yyy" target="_blank" className="hover:text-white transition-colors">Contact</a>
                </div>
            </div>
        </footer>
    );
}
