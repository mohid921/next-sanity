import React from 'react'
import { getImageDimensions } from '@sanity/asset-utils'

const Components = () => {
    const SampleImageComponent = ({ value, isInline }) => {

        const { width, height } = getImageDimensions(value)
        return (

            <Image className='img'
                src={builder
                    .image(value)
                    .width(isInline ? 100 : 800)
                    .url() || '/../../public/assests/images/ImageNotAvaliable.png'}
                alt={value.alt || 'No image'}
                // loading="lazy"
                style={{
                    // Display alongside text if image appears inside a block text span
                    display: isInline ? 'inline-block' : 'block',

                    // Avoid jumping around with aspect-ratio CSS property
                    aspectRatio: width / height,
                }}
                width={650}
                height={380}
                layout='responsive'
            />
        )
    }
    const Components = {
        types: {
            image: SampleImageComponent,
            // Any other custom types you have in your content
            // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
        },
    }
}

export default Components