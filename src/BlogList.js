import React from 'react'

export default function BlogList({ blogs, title, handleDelete }) {
    return (
        <div className="blog-list">
            <h1>{title}</h1>
            {blogs.map(blog => (
                <div className="blog-preview border-2 rounded-lg p-4 bg-orange-400 " key={blog.email}>
                    <h2>{blog.city}</h2>
                    <p className='text-black'>Written by { blog.name}</p>
                    <button className='shadow-2xl bg-sky-700  rounded-lg
                     p-2 m-2 text-white
                     hover:bg-red-700 ' onClick={ () => handleDelete(blog.email)}>Delete Book</button>
                </div>
            ))}
        </div>
    )
}
