import Image from 'next/image'

const RecentlyPlayedTracks = ({ tracks }) => {
    return (
        <div className="flex flex-col container justify-between max-w-4xl mx-auto mb-4">
            <h3 className="m-0 text-sm uppercase mb-4">Recently Played Tracks</h3>
            <div>
                {tracks.map(track => (
                    <div className="flex flex-col mb-2" key={track.title}>
                        <a className="flex text-sm no-underline hover:opacity-75 focus:opacity-75 transition-opacity duration-200" href={track.songUrl} target="_blank" rel="noopener noreferrer">
                            <Image className="w-1/3" alt="Album" src={track.album.artwork} loading="lazy" width={65} height={65} />
                            <div className="w-2/3 ml-2">
                                <span>{track.title}</span>
                                <span className="block text-xs text-gray-500">{track.artist}</span>
                            </div>
                        </a> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RecentlyPlayedTracks;