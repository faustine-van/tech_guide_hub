import React, { useEffect, useState } from 'react';


function CreateResourcesForm() {
    const [metadataFields, setMetadataFields] = useState([]);
    const [imageFile, setImageFile] = useState(null);
    const [imageSrc, setImageSrc] = useState('/profilePhoto-default.jpg');


    const handleAddField = () => {
        setMetadataFields([...metadataFields, { key: '', value: '' }]);
    };

    const handleAddImage = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            setImageSrc(URL.createObjectURL(file));
        }
    };
    
    const handleChange = (index, key, value) => {
        console.log(metadataFields);
        const newFields = metadataFields.slice();
        console.log(newFields)
        newFields[index][key] = value;
        setMetadataFields(newFields);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('resource_type', e.target.resource_type.value);
        formData.append('title', e.target.title.value);
        formData.append('description', e.target.description.value);

        metadataFields.forEach((field) => {
            if (field.key) formData.append(field.key, field.value);
        });

        // imageFiles.forEach((file, index) => {
        //     if (file) formData.append(`images[${index}]`, file);
        // });
        if (imageFile) formData.append('image', imageFile);


        // Method 1: Using a loop to iterate over keys
        for (let val of formData.values()) {
            console.log(val);
        }
        // Submit formData to backend

        
        // Cleanup URLs when component unmounts or files change
        useEffect(() => {
            return () => {
                imageSrc.map((url) => URL.revokeObjectURL(url));
            }

        }, [imageSrc])


    }


    return (
        <div className="user-container">
            <h2>Create New User</h2>
            <div className="resource-img">
                {imageSrc && <img src={imageSrc} className='resources-photo' alt="Profile" /> }
                
            </div>
            <form onSubmit={handleSubmit} className='user-form'>
                <label>Type</label>
                <input name="resource_type" required placeholder="Enter resource_type" />
                <label>Title</label>
                <input name="title" required placeholder="Enter title" />
                <label>Description</label>
                <textarea name="description" placeholder="Enter description" />
                <label>Upload Images</label>
                {/* Backend: Use middleware like Multer for handling file uploads in Express.js. */}
                <input type="file" multiple onChange={handleAddImage} />
                <h4 className='metadata-head'>Additional Metadata</h4>
                {metadataFields.map((field, index) => {
                    return (<div key={index} className='meta-data-fields'>
                        <input type="text"
                            placeholder="Field Name"
                            value={field.key}
                            onChange={(e) => handleChange(index, 'key', e.target.value)}
                        />
                        <input type="text"
                            placeholder="Field Value"
                            value={field.value}
                            onChange={(e) => handleChange(index, 'value', e.target.value)}
                        />
                    </div>);

                })}
                {/* .submit-button class in User.css */}
                <button type="button" className='action-btn create' onClick={handleAddField}>Add Metadata Field</button>
                <div>                <button type="submit" className='submit-button'>Submit</button>  <button type="submit" className='submit-button'>Cancel</button>
                </div>

            </form>
        </div>

    );
}


export default CreateResourcesForm;

export function EditResourcesForm() {

    return (
        <div className="resources-container">
            <h2>Create New User</h2>
            <div className="user-profile">
                <img src="/profilePhoto-default.jpg" className='user-profile-photo' alt="Profile" />
            </div>
            <form onSubmit="" className='resources-form'>
                <div>
                    <label>Type</label>
                    <input name="type" required />
                </div>
                <div>
                    <label>Title</label>
                    <input name="title" required />
                </div>
                <div>
                    <label>Description</label>
                    <textarea name="description" />
                </div>
                <div>

                    <label>Upload Images</label>
                    <input type="file" multiple />
                </div>
                <h4>Additional Metadata</h4>

                <button type="button">Add Metadata Field</button>
                <button type="submit" className='submit-button'>Submit</button>
            </form>
        </div>

    );
}