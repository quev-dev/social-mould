import icDownload from '../../theme/images/icons/download.svg';
import icCopy from '../../theme/images/icons/copy.svg';
import { useState, useEffect } from 'react';

export default function Download ({
  downloadUrlPortrait,
  downloadUrlBanner,
  textToCopy,
}) {

  const [copied, setCopied] = useState(false);

  function handleCopyClick() {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
  }

  useEffect(() => {
    let timeoutId;
    if (copied) {
      timeoutId = setTimeout(() => {
        setCopied(false);
      }, 3000);
    }
    return () => clearTimeout(timeoutId);
  }, [copied]);

  return <aside id="sec-download" className="mx-12 my-16 animate__animated animate__fadeInUp">

    <section className="mb-8">
      <h3>Download</h3>
      <a rel="noreferrer" target="_blank" href={`${downloadUrlPortrait}&dl`} download>
        <img src={icDownload} alt="Zip Icon" className="inline mr-1 relative -translate-y-0.5"/>
        Download Portrait
      </a>
      <br />
      <a rel="noreferrer" target="_blank" href={`${downloadUrlBanner}&dl`} download>
        <img src={icDownload} alt="Zip Icon" className="inline mr-1 relative -translate-y-0.5"/>
        Download Banner
      </a>
    </section>

    <section>

      <h3 className="mb-2">Copy Bio</h3>
      <p className="mb-4">{textToCopy}</p>
      
      <aside className="flex flex-row items-center">
        <button onClick={handleCopyClick}>
          <img src={icCopy} alt="Copy Icon"/>
          Copy
        </button>
        
        {copied && <div className="
        ml-2 animate__animated animate__fadeOutDown animate__delay-2s
        ">
          <p className="hint animate__animated animate__fadeInDown animate__faster">Copied!</p>
        </div>}
      </aside>
      
    </section>

  </aside>
}
