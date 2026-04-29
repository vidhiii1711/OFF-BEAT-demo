import './WatchModal.css'

const YOUTUBE_VIDEO_ID = 'MobOGZAAKMs'

export default function WatchModal({ onClose }) {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close">✕</button>
        <div className="modal-header">
          <span className="modal-logo">OFF<span>/</span>BEAT</span>
          <p>The Story Behind the Studio</p>
        </div>
        <div className="modal-video">
          <iframe
            src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1`}
            title="OFF/BEAT Story"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
        <div className="modal-footer">
          <a
            href={`https://www.youtube.com/watch?v=${YOUTUBE_VIDEO_ID}`}
            target="_blank"
            rel="noopener noreferrer"
            className="modal-yt-link"
          >
            Open in YouTube ↗
          </a>
        </div>
      </div>
    </div>
  )
}
