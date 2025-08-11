import Container from "@/app/_components/container";

export function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200 dark:bg-slate-800">
      <Container>
      <div className="flex flex-row justify-between">  
        <div className="py-10 text-left text-sm text-gray-600 dark:text-gray-300">
          <p>&copy; {new Date().getFullYear()} Diki Atmodjo. All rights reserved.</p>
        </div>
        <div className="py-10 text-left text-sm text-gray-600 dark:text-gray-300">
          <a
            href="https://www.linkedin.com/in/dikiatmodjo/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
      </Container>
    </footer>
  );
}

export default Footer;
