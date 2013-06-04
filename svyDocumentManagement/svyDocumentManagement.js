/**
 * Public document/folder security level
 * 
 * TODO: deprecate in Servoy 7 when use of DOC_SECURITY enum is possible in relations
 * 
 * @type {Number}
 * @private
 *
 * @properties={typeid:35,uuid:"6E95CAFA-39A2-4FC0-8957-62E1403B0887",variableType:4}
 */
var DOC_SECURITY_PUBLIC = 2;

/**
 * Group document/folder security level
 * 
 * TODO: deprecate in Servoy 7 when use of DOC_SECURITY enum is possible in relations
 * 
 * @type {Number}
 * @private
 * 
 * @properties={typeid:35,uuid:"361BADB7-BD72-4A56-847F-331BBEAC1441",variableType:4}
 */
var DOC_SECURITY_GROUP = 1;

/**
 * Private document security level
 * 
 * TODO: deprecate in Servoy 7 when use of DOC_SECURITY enum is possible in relations
 * 
 * @type {Number}
 * @private
 * 
 * @properties={typeid:35,uuid:"C275B355-E39C-41E7-A86E-F56459039C1F",variableType:4}
 */
var DOC_SECURITY_PRIVATE = 0;

/**
 * If true, the document management is enabled
 * 
 * @final
 * 
 * @type {Boolean}
 * 
 * @properties={typeid:35,uuid:"449EB68A-B088-4FB1-9BB5-82392318DA6F",variableType:-4}
 */
var DOC_MANAGEMENT_ENABLED = scopes.svyProperties.getPropertyValue("document_management") == true ? true : false;

/**
 * If true, documents of any file type can be used within the module
 * 
 * @final
 * 
 * @type {Boolean}
 * 
 * @properties={typeid:35,uuid:"D0BEFADC-4C5B-49D5-9501-327D50E38367",variableType:-4}
 */
var ALLOW_ALL_FILE_TYPES = scopes.svyProperties.getPropertyValue("document_management_allow_all_file_types") == true ? true : false;

/**
 * Object that holds all allowed file types for the document management system
 * 
 * The object can be used to get, add and remove file types globally or for a specific organization
 * 
 * @type {AllowedFileTypes}
 *
 * @properties={typeid:35,uuid:"CD9CFD75-6FAE-4B30-B025-8E895DD0D229",variableType:-4}
 */
var ALLOWED_FILE_TYPES = new AllowedFileTypes();

/**
 * If true, documents will be stored in the database; if false, documents are stored in the server's file system
 * 
 * @final
 * 
 * @type {Boolean}
 * 
 * @properties={typeid:35,uuid:"352372BD-B04D-4471-AE91-20F337DEDC36",variableType:-4}
 */
var STORE_DOCUMENTS_IN_DB = scopes.svyProperties.getPropertyValue("document_management_in_database") == true ? true : false;

/**
 * If true, document revisions are supported
 * 
 * @final
 * 
 * @type {Boolean}
 * 
 * @properties={typeid:35,uuid:"D240F91A-04F5-42AF-A8CA-385A38D753F9",variableType:-4}
 */
var STORE_REVISIONS = scopes.svyProperties.getPropertyValue("document_management_revision") == true ? true : false;

/**
 * If true, checked out documents are automatically checked for changes and checked in again (smart client only!)
 * 
 * @final
 * 
 * @type {Boolean}
 * 
 * @properties={typeid:35,uuid:"7EE5BF95-2B1C-4F14-8512-A5C5F6A7911C",variableType:-4}
 */
var USE_TRACKED_CHECKOUT = scopes.svyProperties.getPropertyValue("document_management_tracked_checkout") == true ? true : false;

/**
 * i18n keys used in various dialogs
 * 
 * @properties={typeid:35,uuid:"337978AA-6D88-4D4F-B6EC-87BF45619EF5",variableType:-4}
 */
var I18N_KEYS = {
	
	/** File type description for allowed documents in a file open dialog */
	ALLOWED_DOCUMENTS: "i18n:svy.fr.dlg.allowed_documents",
	
	/** dialog title for save dialogs */
	DIALOG_TITLE_SAVE: "i18n:svy.fr.dlg.document_save",
	
	/** dialog title for checkout dialogs */
	DIALOG_TITLE_CHECKOUT: "i18n:svy.fr.dlg.checkout_document",
	
	/** dialog title for checkin dialogs */
	DIALOG_TITLE_CHECKIN: "i18n:svy.fr.lbl.document_checkin",
	
	/** dialog title for upload dialogs */
	DIALOG_TITLE_UPLOAD: "i18n:svy.fr.dlg.upload_document",
	
	/** "OK" button in error messages */
	DIALOG_BUTTON_OK: "i18n:svy.fr.lbl.ok",		
	
	/** "Yes" option in a question dialog */
	DIALOG_OPTION_YES: "i18n:svy.fr.lbl.yes",
	
	/** "No" option in a question dialog */
	DIALOG_OPTION_NO: "i18n:svy.fr.lbl.no",
	
	/** Question message that is shown when the user wants to override an existing document */
	OVERRIDE_EXISTING_DOCUMENT: "i18n:svy.fr.dlg.override_existing_document",
	
	/** Question message that is shown when the user wants check out the same revision again */
	OVERRIDE_LAST_CHECKOUT: "i18n:svy.fr.dlg.document_undo_checkout",
	
	/** Message that is shown when the user wants to check in a document that is not checked out */
	CHECKIN_NOT_POSSIBLE: "i18n:svy.fr.lbl.document_checkin_not_allowed",
	
	/** Message that is shown when the user wants to check in a document that is checked out by another user */
	CHECKIN_ONLY_ALLOWED_FOR_CHECKOUT_USER: "i18n:svy.fr.lbl.document_checkin_allowed_for_checkout_user"
};

/**
 * @enum
 * 
 * @properties={typeid:35,uuid:"72813F31-226C-47FF-8302-4BCD412FD9FB",variableType:-4}
 */
var ERROR_CODES = {
	FILE_TYPE_NOT_ALLOWED: 1000
};

/**
 * @type {String}
 * 
 * @private 
 *
 * @properties={typeid:35,uuid:"1AAC8E7E-AA41-476B-8EF0-6B18FF31B38E"}
 */
var DOCUMENT_CHANGED_EVENT_ACTION = "documentChanged";

/**
 * Document security constants
 * 
 * TODO: set integer values here in Servoy 7 when use of enums is possible in relations
 * 
 * @enum
 * 
 * @properties={typeid:35,uuid:"510E53E8-EE8C-48E6-8B7A-D39FC6B3074A",variableType:-4}
 */
var DOC_SECURITY = { 
	PUBLIC: DOC_SECURITY_PUBLIC, 
	GROUP: DOC_SECURITY_GROUP, 
	PRIVATE: DOC_SECURITY_PRIVATE
};

/**
 * The FileWatcher used to automatically discover modified files
 * 
 * @private 
 *
 * @properties={typeid:35,uuid:"BEE5C763-95D4-4C38-8E36-794BA9DC07E7",variableType:-4}
 */
var FILE_WATCHER = {
	
	/**
	 * Watched files
	 * @type {Array<WatchedFile>}
	 */
	watchedFiles: new Array(),
	
	/**
	 * If true, a scheduler checks the watched files for changes
	 * @type {Boolean}
	 */
	isActive: false,
	
	/**
	 * Method that is called when a checked out file is modified
	 * @type {Function}
	 */
	fileModifiedCallbackMethod: null,
	
	/**
	 * Watches the given file for modifications
	 * @param {plugins.file.JSFile} file
	 * @param {DocumentRevision} documentRevision
	 */
	watchFile: function(file, documentRevision) {	
		if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
			// nothing to watch
			return;
		}
		var fileToWatch = new WatchedFile(file, documentRevision);
		this.watchedFiles.push(fileToWatch);
		if (!this.isActive) {
			plugins.scheduler.removeJob('svyDocumentManagementFileWatcher');
			plugins.scheduler.addJob('svyDocumentManagementFileWatcher', new Date(), checkFiles, FILE_WATCHER_CHECK_INTERVAL * 1000);
			this.isActive = true;
		}
	},
	
	/**
	 * Stops watching the given file
	 * @param {plugins.file.JSFile} file
	 */
	unwatchFile: function(file) {
		if (application.getApplicationType() != APPLICATION_TYPES.SMART_CLIENT) {
			// nothing to watch
			return;
		}
		for (var i = 0; i < this.watchedFiles.length; i++) {
			/** @type {WatchedFile} */
			var watchedFile = this.watchedFiles[i];
			if (watchedFile.file.getAbsolutePath() == file.getAbsolutePath()) {
				this.watchedFiles.splice(i, 1);
			}
		}
		if (this.watchedFiles.length == 0) {
			plugins.scheduler.removeJob('svyDocumentManagementFileWatcher');
			this.isActive = false;
		}
	},
	
	/**
	 * Checks all watched files for changes
	 */
	checkFiles: function() {
		for (var i = 0; i < this.watchedFiles.length; i++) {
			/** @type {WatchedFile} */
			var watchedFile = this.watchedFiles[i];
			var jsFile = watchedFile.file;
			if (!jsFile.exists()) {
				this.unwatchFile(jsFile);
				continue;
			}
			if (jsFile.lastModified() > watchedFile.lastModified) {
				watchedFile.lastModified = jsFile.lastModified();
				this.fileChanged(watchedFile);
			}
		}
	},
	
	/**
	 * Fired whenever a watched file has been modified
	 * @param {WatchedFile} file
	 */
	fileChanged: function(file) {
		// Fire event
		scopes.modUtils$eventManager.fireEvent(this, DOCUMENT_CHANGED_EVENT_ACTION, [file.documentRevision, file.file]);
		// Fire callback method
		// TODO: deprecate in v5
		/** @type {Function} */
		var callbackMethod = this.fileModifiedCallbackMethod;
		if (callbackMethod) {
			callbackMethod.apply(this, [file.documentRevision, file.file]);
		}
	}
};

/**
 * The interval in seconds in which the FileWatcher checks for changed files
 * 
 * @type {Number}
 * 
 * @private 
 *
 * @properties={typeid:35,uuid:"3512CBF5-561B-4FA7-8A8B-10174CDD3EA4",variableType:4}
 */
var FILE_WATCHER_CHECK_INTERVAL = 10;

/**
 * The method that is called when a file is uploaded
 * 
 * @type {Function}
 * 
 * @private 
 *
 * @properties={typeid:35,uuid:"393184A8-8EA1-46A7-B944-ACEFF6FD68F4",variableType:-4}
 */
var uploadCallBackMethod;

/**
 * Holds
 * @type {JSRecord}
 * 
 * @private 
 *
 * @properties={typeid:35,uuid:"5F134E2D-56DC-456A-9C86-2C4EB15C11BE",variableType:-4}
 */
var uploadRecordToAttachTo;

/**
 * @type {DocumentRevision}
 * 
 * @private 
 *
 * @properties={typeid:35,uuid:"CA2800D4-BBAE-4581-BB52-C5B6D76972D1",variableType:-4}
 */
var checkinRevision;

/**
 * @type {String}
 * @private 
 *
 * @properties={typeid:35,uuid:"5EEFD8B0-4F1A-4F23-BC24-FC10D3CE2AE5"}
 */
var checkinRevisionReason = '';

/**
 * Returns the document with the given ID
 * 
 * @param {String|UUID} documentId
 * 
 * @return {Document}
 * 
 * @author patrick
 * @since 13.02.2013 
 *
 * @properties={typeid:24,uuid:"D41BF9F0-7BF1-4820-98DF-7E95306D1B73"}
 */
function getDocumentById(documentId) {
	if (!documentId) {
		return null;
	}
	
	/** @type {QBSelect<db:/svy_framework/doc_document>} */
	var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document");
	query.result.addPk();
	query.where.add(query.columns.doc_document_id.eq(documentId.toString()));
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs = databaseManager.getFoundSet(query);
	if (!utils.hasRecords(fs)) {
		return null;
	} else {
		return new Document(fs.getRecord(1));
	}
}

/**
 * Returns an Array of Documents with all documents attached to the given record
 * or null if the given record has no documents attached
 * 
 * @param {JSRecord} record
 * 
 * @return {Array<Document>}
 * 
 * @author patrick
 * @since 06.09.2012 
 *
 * @properties={typeid:24,uuid:"527AA912-6D01-46B8-A86C-5B4C98BCDAAC"}
 */
function getDocumentsForRecord(record) {
	if (!record) {
		return null;
	}
	
	var linkedTable;
	var linkedId;
	
	var jsTable = databaseManager.getTable(record);

	if (!jsTable) {
		return null;
	}
	
	linkedTable = jsTable.getSQLName().toLowerCase();
	linkedId = record.getPKs().join(",");
	
	/** @type {QBSelect<db:/svy_framework/doc_document>} */	
	var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document");
	query.result.addPk();
	query.where.add(query.columns.linked_table.eq(linkedTable)); 
	query.where.add(query.columns.linked_id.eq(linkedId));
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs = databaseManager.getFoundSet(query);
	
	/** @type {Array<Document>} */
	var result = new Array();
	
	if (fs && utils.hasRecords(fs)) {
		for (var d = 1; d <= fs.getSize(); d++) {
			var docRecord = fs.getRecord(d);
			result.push(new Document(docRecord));
		}
	}
	
	return result;
}

/**
 * Document object wrapper for doc_document
 * 
 * @param {JSRecord<db:/svy_framework/doc_document>} record
 * 
 * @private 
 * @constructor 
 * 
 * @author patrick
 * @since 06.09.2012 
 *
 * @properties={typeid:24,uuid:"8B80D966-9043-4D34-8E04-90A48DF9A079"}
 */
function Document(record) {
	
	if (!record || !(record instanceof JSRecord) || databaseManager.getDataSourceTableName(record.getDataSource()).toLowerCase() != "doc_document") {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("Document constructor requires a doc_document record");
	}
	
	/**
	 * The name of the document
	 * 
	 * @type {String}
	 */
	this.fileName = record.name;
	
	/**
	 * The description of the document
	 * 
	 * @type {String}
	 */
	this.description = record.description;
	
	/**
	 * The modification date of this Document
	 * 
	 * @type {Date}
	 */
	this.lastModified = record.modification_date;
	
	/**
	 * true if this document has been checked out
	 * 
	 * @type {Boolean}
	 */
	this.isCheckedOut = false;
	
	/**
	 * Returns true if the document is linked to a record
	 * 
	 * @type {Boolean}
	 */
	this.isLinkedToRecord = false;
	
	/**
	 * Returns the ID of the document
	 * 
	 * @type {UUID}
	 */
	this.documentId = record.doc_document_id;
	
	/**
	 * The security level of this document<br>
	 * 
	 * The security level can be "PUBLIC", "GROUP" or "PRIVATE" 
	 * 
	 * @type {String}
	 */
	this.securityLevel = "";
	
	/**
	 * If true, the revision is stored in the database<br>
	 * if false, it is stored on the server file system
	 * 
	 * @type {Boolean}
	 */
	this.isStoredInDb = false;
	
	/**
	 * Returns all revisions of this Document as an Array<DocumentRevision>
	 * 
	 * @return {Array<DocumentRevision>}
	 */
	this.getRevisions = function() {
		/** @type {JSFoundSet<db:/svy_framework/doc_revision>} */	
		var fs = record.doc_document_to_doc_revision;
		
		/** @type {Array<DocumentRevision>} */
		var result = new Array();
		if (fs) {
			for (var i = 1; i <= fs.getSize(); i++) {
				var revisionRec = fs.getRecord(i);
				result.push(new DocumentRevision(revisionRec));
			}
		} 
		return result;
	}
	
	/**
	 * Returns the thumbnail image of this document if available or null if not<p>
	 * 
	 * If revisions are kept, the thumbnail of the last revision is returned
	 * 
	 * @this {Document}
	 * 
	 * @return {byte[]} thumbnail
	 */
	this.getThumbnail = function() {
		var docRevision = this.getLastRevision();
		if (!docRevision) {
			return null;
		} else {
			return docRevision.getThumbnail();
		}
	}
	
	/**
	 * Returns the Document's binary data<p>
	 * 
	 * If revisions are kept, the data of the last revision is returned
	 * 
	 * @this {Document}
	 * 
	 * @return {byte[]} bytes
	 */
	this.getBytes = function() {
		var docRevision = this.getLastRevision();
		if (!docRevision) {
			return null;
		} else {
			return docRevision.getBytes();
		}
	}
	
	/**
	 * Returns the last revision of this Document as a DocumentRevision object
	 * 
	 * @return {DocumentRevision}
	 */
	this.getLastRevision = function() {
		/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
		var fs = record.foundset;
		var lastRevisionRecord = fs.getLastRevisionRecord(record);
		if (lastRevisionRecord) {
			return new DocumentRevision(lastRevisionRecord);
		} else {
			return null;
		}
	}
	
	/**
	 * Returns the linked record or null if the no record is linked or the record could not be found
	 * 
	 * @return {JSRecord} linkedRecord
	 */
	this.getLinkedRecord = function() {
		/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
		var fs = record.foundset;
		return fs.getLinkedRecord(record);
	}
	
	/**
	 * Returns the extension of this Document
	 * 
	 * @this {Document}
	 * 
	 * @return {String} the document extension
	 */
	this.getDocumentExtension = function() {
		return getDocumentExtension(this.fileName);
	}
	
	/**
	 * Links this Document to the given record
	 * 
	 * @param {JSRecord} recordToLinkTo
	 * @return {Boolean} success
	 */
	this.linkToRecord = function(recordToLinkTo) {
		/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
		var fs = record.foundset;
		return fs.linkToRecord(recordToLinkTo, record);
	}
	
	/**
	 * Checks out this document
	 * 
	 * @param {String|plugins.file.JSFile} [targetFile]
	 * 
	 * @this {Document}
	 * 
	 * @return {Boolean} success
	 * 
	 * @throws {String} revisionNotFound
	 */
	this.checkout = function(targetFile) {
		var revision = this.getLastRevision();
		if (revision) {
			return revision.checkout(targetFile);
		} else {
			throw new scopes.modUtils$exceptions.IllegalStateException("Checkout for document \"" + this.fileName + "\" failed because the last revision could not be retrieved");
		}
	}
	
	/**
	 * Checks this document back in
	 * 
	 * @param {plugins.file.JSFile|String} [file] 	- optional file or file path
	 * @param {String} [revisionDescription] 		- optional description/reason for this revision
	 * 
	 * @this {Document}
	 * 
	 * @return {Boolean} success
	 * 
	 * @throws {String} revisionNotFound
	 */
	this.checkin = function(file, revisionDescription) {
		var revision = this.getLastRevision();
		if (revision) {
			return revision.checkin(file, revisionDescription);
		} else {
			throw new scopes.modUtils$exceptions.IllegalStateException("Checkout for document \"" + this.fileName + "\" failed because the last revision could not be retrieved");
		}
	}
	
	/**
	 * Reverts the last checkout marking the document as not checked out
	 * 
	 * @this {Document}
	 * 
	 */
	this.revertCheckout = function() {
		var revision = this.getLastRevision();
		if (revision) {
			revision.revertCheckout();
		} else {
			record.is_checked_out = 0;
			databaseManager.saveData(record);			
		}
	}
	
	/**
	 * Writes the Document's binary data of this revision to the given file<p>
	 * 
	 * If no file is given in the smart client, the user will be presented with a file save dialog<p>
	 * 
	 * If revisions are kept, the last revision is written
	 * 
	 * @param {plugins.file.JSFile|String} [file]
	 * 
	 * @this {Document}
	 * 
	 * @return {boolean} success
	 */
	this.writeToFile = function(file) {
		var revision = this.getLastRevision();
		if (revision) {
			return revision.writeToFile(file)
		} else {
			return false;
		}
	}
	
	Object.defineProperty(this, "fileName", {
        set: function (x) {
        	record.name = x;
        	databaseManager.saveData(record);
        },
        get: function () {
            return record.name;
        }
    });
	
	Object.defineProperty(this, "description", {
        set: function (x) {
        	record.description = x;
        	databaseManager.saveData(record);
        },
        get: function () {
            return record.description;
        }
    });	
	
	Object.defineProperty(this, "lastModified", {
        get: function () {
            return record.modification_date;
        }
    });	
	
	Object.defineProperty(this, "isCheckedOut", {	
        get: function () {
            return record.is_checked_out ? true : false;
        }
    });	
	
	Object.defineProperty(this, "isStoredInDb", {	
        get: function () {
            return utils.hasRecords(record.doc_document_to_doc_revision$latest_revision) && 
            	utils.hasRecords(record.doc_document_to_doc_revision$latest_revision.doc_revision_to_doc_document_binary);
        }
    });	
	
	Object.defineProperty(this, "documentId", {	
        get: function () {
            return record.doc_document_id;
        }
    });		
	
	Object.defineProperty(this, "isLinkedToRecord", {	
        get: function () {
            return (record.linked_table != null && record.linked_table.length > 0 && record.linked_id != null && record.linked_id.length > 0);
        }
    });	
	
	Object.defineProperty(this, "securityLevel", {	
		set: function (x) {
			if (x instanceof String && x in DOC_SECURITY) {
				record.security_level = DOC_SECURITY[x];
				databaseManager.saveData(record);				
			}
			else if (x instanceof Number && (x == DOC_SECURITY.PRIVATE || x == DOC_SECURITY.PUBLIC || x == DOC_SECURITY.GROUP)) {
				record.security_level = x;
				databaseManager.saveData(record);
			}
		}, 
        get: function () {
            if (record.security_level == DOC_SECURITY.PRIVATE) {
            	return "PRIVATE";
            } else if (record.security_level == DOC_SECURITY.GROUP) {
            	return "GROUP";
            } else if (record.security_level == DOC_SECURITY.PUBLIC) {
            	return "PUBLIC";
            } else {
            	return null;
            }
        }
    });
	
	Object.defineProperties(this, {
		"getBytes": {
			enumerable: false
		},
		"getLinkedRecord": {
			enumerable: false
		},
		"getDocumentExtension": {
			enumerable: false
		},
		"getRevisions": {
			enumerable: false
		},
		"getLastRevision": {
			enumerable: false
		},
		"getThumbnail": {
			enumerable: false
		},		
		"linkToRecord": {
			enumerable: false
		},
		"writeToFile": {
			enumerable: false
		},
		"checkout": {
			enumerable: false
		},
		"checkin": {
			enumerable: false
		}
	});
	
	Object.seal(this);
}

/**
 * DocumentRevision object wrapper for doc_revision
 * 
 * @param {JSRecord<db:/svy_framework/doc_revision>} record
 *
 * @private  
 * @constructor 
 * 
 * @author patrick
 * @since 06.09.2012 
 * 
 * @properties={typeid:24,uuid:"0C4DE267-2F21-4F82-8005-6C8E532E2562"}
 */
function DocumentRevision(record) {
	
	if (!record || !(record instanceof JSRecord) || databaseManager.getDataSourceTableName(record.getDataSource()).toLowerCase() != "doc_revision") {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("DocumentRevision constructor requires a doc_revision record");
	}
	
	/**
	 * The file name of this revision
	 * 
	 * @type {String}
	 */
	this.fileName = record.original_filename;
	
	/**
	 * The number of this revision
	 * 
	 * @type {Number}
	 */
	this.revisionNumber = record.revision_number;
	
	/**
	 * The description for this revision
	 * 
	 * @type {String}
	 */
	this.revisionDescription = record.revision_reason;
	
	/**
	 * The date of this revision
	 * 
	 * @type {Date}
	 */
	this.revisionDate = record.revision_datetime;
	
	/**
	 * The ID of this revision
	 * 
	 * @type {UUID}
	 */
	this.revisionId = record.doc_revision_id;
	
	/**
	 * The ID of the document of this revision
	 * 
	 * @type {UUID}
	 */
	this.documentId = record.doc_document_id;
	
	/**
	 * The ID of the user who has checked out this revision or null if not checked out
	 * 
	 * @type {UUID}
	 */
	this.checkedOutByUserId = record.checked_out_by_user;
	
	/**
	 * The date on which this revision has been checked out
	 * 
	 * @type {Date}
	 */
	this.checkedOutDate = record.checked_out_datetime;
	
	/**
	 * The path to which this document was last checked out
	 * 
	 * @type {String}
	 */
	this.checkedOutFilePath = record.checked_out_file_path;
	
	/**
	 * The path from which the checkin occured<p>
	 * 
	 * Note that in the web client, only the file name will be returned
	 * 
	 * @type {String}
	 */
	this.checkedInFromFilePath = record.checked_in_from_file_path;
	
	/**
	 * If true, the revision is stored in the database<br>
	 * if false, it is stored on the server file system
	 * 
	 * @type {Boolean}
	 */
	this.isStoredInDb = false;
	
	/**
	 * Returns the User who has checked out this revision as a scopes.svySecurityManager.User object
	 * 
	 */
	this.getUser = function() {
		if (!record.checked_out_by_user) {
			return null;
		} else {
			return scopes.svySecurityManager.getUserById(record.checked_out_by_user);
		}
	}
	
	/**
	 * Returns the Document object for this revision or null if not found
	 * 
	 * @return {Document}
	 */
	this.getDocument = function() {
		/** @type {QBSelect<db:/svy_framework/doc_document>} */	
		var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document");
		query.result.addPk();
		query.where.add(query.columns.doc_document_id.eq(record.doc_document_id.toString()));
		/** @type {JSFoundSet<db:/svy_framework/doc_document>} */	
		var fs = databaseManager.getFoundSet(query);
		if (fs && fs.getSize() == 1) {
			return new Document(fs.getRecord(1));
		} else {
			return null;
		}
	}
	
	/**
	 * Returns the Document's binary data of this revision
	 * 
	 * @return {byte[]} bytes
	 */
	this.getBytes = function() {
		if (utils.hasRecords(record.doc_revision_to_doc_document_binary)) {
			return getBytesFromDatabase();
		} else {
			return getBytesFromFileSystem();
		}
	}
	
	/**
	 * Writes the Document's binary data of this revision to the given file<p>
	 * 
	 * If no file is given in the smart client, the user will be presented with a file save dialog
	 * 
	 * @param {plugins.file.JSFile|String} [file]
	 * 
	 * @this {DocumentRevision}
	 * 
	 * @return {boolean} success
	 */
	this.writeToFile = function(file) {
		if (!scopes.modUtils$system.isWebClient() && !file) {
			file = plugins.file.showFileSaveDialog(this.fileName, I18N_KEYS.DIALOG_TITLE_SAVE);
			if (!file) {
				return false;
			}
		}
		if (scopes.modUtils$system.isWebClient() && !file) {
			file = this.fileName;
		}
		if (!scopes.modUtils$system.isWebClient() && file instanceof String) {
			file = plugins.file.convertToJSFile(file);
		}
		// The setting of STORE_DOCUMENTS_IN_DB might have been changed over time
		// so we decide not upon that, but only check if we have binary data or not
		var storedInDb = utils.hasRecords(record.doc_revision_to_doc_document_binary);
		var bytes;
		try {
			if (storedInDb) {
				bytes = getBytesFromDatabase(file);
			} else {
				bytes = getBytesFromFileSystem(file);
			}
			if (bytes) {
				return true;
			} else {
				return false;
			}
		} catch (e /** @type {scopes.modUtils$exceptions.SvyException} */) {
			application.output("Error writing file to disk: " + e.message, LOGGINGLEVEL.ERROR);
			return false;
		}
	}
	
	/**
	 * Checks out this revision<p>
	 * 
	 * if no targetFile is given, the user will be presented with a save dialog
	 * 
	 * @param {String|plugins.file.JSFile} [targetFile]
	 * 
	 * @this {DocumentRevision}
	 * 
	 * @return {Boolean} success
	 */
	this.checkout = function(targetFile) {
		var user = scopes.svySecurityManager.getUser();
		var option;
		
		if (this.checkedOutByUserId) {
			// Document already checked out
			if (this.checkedOutByUserId != user.userId) {
				// by different user
				throw new DocumentCheckedOutByOtherUserException(this, i18n.getI18NMessage("svy.fr.dlg.document_already_checked_out"));
			} else if (this.checkedOutByUserId == user.userId) {
				// by same user: override?
				option = globals["DIALOGS"].showQuestionDialog(
					getMessageValue(I18N_KEYS.DIALOG_TITLE_CHECKOUT),
					getMessageValue(I18N_KEYS.OVERRIDE_LAST_CHECKOUT),
					getMessageValue(I18N_KEYS.DIALOG_OPTION_YES),
					getMessageValue(I18N_KEYS.DIALOG_OPTION_NO));
				if (option && option == getMessageValue(I18N_KEYS.DIALOG_OPTION_YES)) {
					if (USE_TRACKED_CHECKOUT) {
						FILE_WATCHER.unwatchFile(plugins.file.convertToJSFile(this.checkedOutFilePath));
					}
				} else {
					return false;
				}
			}
		}
		
		if (targetFile instanceof String) {
			targetFile = plugins.file.convertToJSFile(targetFile);
		}
		
		if (!targetFile) {
			if (scopes.modUtils$system.isWebClient()) {
				targetFile = this.fileName;
			} else {
				targetFile= plugins.file.showFileSaveDialog(this.fileName, getMessageValue(I18N_KEYS.DIALOG_TITLE_CHECKOUT));
			}
		}
		if (!targetFile) {
			return false;
		}

		if (!scopes.modUtils$system.isWebClient() && targetFile.exists()) {
			option = globals["DIALOGS"].showQuestionDialog(
				getMessageValue(I18N_KEYS.DIALOG_TITLE_CHECKOUT),
				getMessageValue(I18N_KEYS.OVERRIDE_EXISTING_DOCUMENT),
				getMessageValue(I18N_KEYS.DIALOG_OPTION_YES),
				getMessageValue(I18N_KEYS.DIALOG_OPTION_NO));

			if (option != getMessageValue(I18N_KEYS.DIALOG_OPTION_YES)) {
				return false;
			}
		}

		if (this.writeToFile(targetFile)) {
			setCheckedOut(getDocumentRecord(), getRevisionRecord(), true, targetFile);
			
			if (USE_TRACKED_CHECKOUT) {
				FILE_WATCHER.watchFile(targetFile, this);
			}
			
			return true;
		}

		return false;
	}
	
	/**
	 * Checks this revision back in<p>
	 * 
	 * If no file is given, the user will be presented with a file open dialog
	 * 
	 * @param {plugins.file.JSFile|String} [file] 	- optional file or file path
	 * @param {String} [revisionDescription] 		- optional description/reason for this revision
	 * 
	 * @this {DocumentRevision}
	 * 
	 * @return {Boolean} success
	 */
	this.checkin = function(file, revisionDescription) {
		if (!record.checked_out_datetime) {
			globals["DIALOGS"].showInfoDialog(
				getMessageValue(I18N_KEYS.DIALOG_TITLE_CHECKIN),
				getMessageValue(I18N_KEYS.CHECKIN_NOT_POSSIBLE),
				getMessageValue(I18N_KEYS.DIALOG_OPTION_YES));
			return false;
		}
		var user = scopes.svySecurityManager.getUser();
		if (record.revision_by_user && record.revision_by_user.toString() != user.userId.toString()) {
			globals["DIALOGS"].showInfoDialog(
				getMessageValue(I18N_KEYS.DIALOG_TITLE_CHECKIN),
				getMessageValue(I18N_KEYS.CHECKIN_ONLY_ALLOWED_FOR_CHECKOUT_USER),
				getMessageValue(I18N_KEYS.DIALOG_BUTTON_OK));
			return false;
		} else {
			
			checkinRevision = this;
			checkinRevisionReason = revisionDescription;
			
			if (file && file instanceof String) {
				file = plugins.file.convertToJSFile(file);
			}
			if (!file) {
				file = plugins.file.showFileOpenDialog(
				1, 
				null, 
				false, 
				getFileTypeFilter(),
				doCheckin, 
				getMessageValue(I18N_KEYS.DIALOG_TITLE_CHECKIN));
			} else {
				doCheckin([file]);
			}
			if (!file) {
				return false;
			} else {
				return true;
			}
		} 
	}
	
	/**
	 * Returns the thumbnail image of this document revision if available or null if not
	 * 
	 * @return {byte[]} thumbnail
	 */
	this.getThumbnail = function() {
		if (utils.hasRecords(record.doc_revision_to_doc_document_thumbnail)) {
			return record.doc_revision_to_doc_document_thumbnail.document_thumbnail;
		} else {
			return null;
		}
	}
	
	/**
	 * Reverts the last checkout marking this revision as not checked out
	 * 
	 * @this {DocumentRevision}
	 */
	this.revertCheckout = function() {
		record.checked_out_by_user = null;
		record.checked_out_datetime = null;
		record.checked_out_file_path = null;
		if (utils.hasRecords(record.doc_revision_to_doc_document)) {
			record.doc_revision_to_doc_document.is_checked_out = null;
			databaseManager.saveData(record.doc_revision_to_doc_document);
		}
		databaseManager.saveData(record);
	}
	
	/**
	 * Returns the doc_document record
	 * @private 
	 * @return {JSRecord<db:/svy_framework/doc_document>}
	 */
	function getDocumentRecord() {
		if (utils.hasRecords(record.doc_revision_to_doc_document)) {
			return record.doc_revision_to_doc_document.getRecord(1);
		} else {
			return null;
		}
	}
	
	/**
	 * Returns the doc_revision record
	 * @private 
	 * @return {JSRecord<db:/svy_framework/doc_revision>}
	 */
	function getRevisionRecord() {
		return record;
	}
	
	/**
	 * Loads the data of the revision from the database<p>
	 * 
	 * If a file is given, writes the data to the file
	 * 
	 * @private  
	 * 
	 * @param {plugins.file.JSFile|String} [targetFile]
	 * 
	 * @return {byte[]}
	 * 
	 * @throws {scopes.modUtils$IO.IOException}
	 * @throws {scopes.modUtils$exceptions.IllegalStateException}
	 * 
	 */
	function getBytesFromDatabase(targetFile) {
		/** @type {QBSelect<db:/svy_framework/doc_document_binary>} */
		var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document_binary");
		query.result.add(query.columns.document_binary);
		query.where.add(query.columns.doc_revision_id.eq(record.doc_revision_id.toString()));
		var dataset = databaseManager.getDataSetByQuery(query, 1);
		if (dataset && dataset.getMaxRowIndex() == 1) {
			var bytes = dataset.getValue(1,1);
			if (targetFile) {
				if (scopes.modUtils$system.isWebClient()) {
					if (targetFile instanceof plugins.file.JSFile) {
						plugins.file.writeFile(targetFile.getName(), bytes)
					} else {
						plugins.file.writeFile(targetFile, bytes)
					}
				} else {
					if (!plugins.file.writeFile(targetFile, bytes)) {
						throw new scopes.modUtils$IO.IOException("Error writing to file \"" + targetFile.getAbsolutePath() + "\"");
					}
				}
			}
			return bytes;
		} else {
			throw new scopes.modUtils$exceptions.IllegalStateException("Could not find binary data for requested document revision in database");
		}
	}
	
	/**
	 * Streams the file to a tmp or the given file and reads the data
	 * 
	 * @private 
	 * 
	 * @param {plugins.file.JSFile|String} [targetFile]
	 * @return {byte[]}
	 * 
	 * @throws {String} errorMessage
	 */
	function getBytesFromFileSystem(targetFile) {
		// Check if remote file exists
		var remoteFileName = getServerFileName(record);
		var remoteJsFile = plugins.file.convertToRemoteJSFile(remoteFileName);
		if (!remoteJsFile.exists()) {
			throw new scopes.modUtils$IO.FileNotFoundException("Could not find remote file \"" + remoteJsFile.getAbsolutePath() + "\"", remoteJsFile);
		}
		if (scopes.modUtils$system.isWebClient()) {
			var bytes = remoteJsFile.getBytes();
			if (targetFile instanceof plugins.file.JSFile) {
				plugins.file.writeFile(targetFile.getName(), bytes)
			} else {
				plugins.file.writeFile(targetFile, bytes)
			}
			return bytes;
		} else {
			if (!targetFile) {
				targetFile = plugins.file.createTempFile("svyDocumentManagement_", ".tmp");
			}
			var monitor = plugins.file.streamFilesFromServer(targetFile, remoteFileName);
			do {
				application.sleep(50);
			} while (!monitor.isFinished() && !monitor.isCanceled());
			return targetFile.getBytes();
		}
	}
	
	Object.defineProperty(this, "fileName", {
        set: function (x) {
        },
        get: function () {
            return record.original_filename;
        }
    });
	
	Object.defineProperty(this, "revisionNumber", {
        set: function (x) {
        },
        get: function () {
            return record.revision_number;
        }
    });
	
	Object.defineProperty(this, "revisionDescription", {
        set: function (x) {
        	record.revision_reason = x;
        	databaseManager.saveData(record);
        },
        get: function () {
            return record.revision_reason;
        }
    });	
	
	Object.defineProperty(this, "revisionDate", {
        set: function (x) {
        },
        get: function () {
            return record.revision_datetime;
        }
    });
	
	Object.defineProperty(this, "checkedOutByUserId", {
        set: function (x) {
        },
        get: function () {
            return record.checked_out_by_user;
        }
    });	
	
	Object.defineProperty(this, "revisionId", {
        set: function (x) {
        },
        get: function () {
            return record.doc_revision_id;
        }
    });		
	
	Object.defineProperty(this, "documentId", {
        set: function (x) {
        },
        get: function () {
            return record.doc_document_id;
        }
    });		
	
	Object.defineProperty(this, "checkedOutDate", {
        set: function (x) {
        },
        get: function () {
            return record.checked_out_datetime;
        }
    });	
	
	Object.defineProperty(this, "checkedOutFilePath", {
        set: function (x) {
        	record.checked_out_file_path = x;
        	databaseManager.saveData(record);
        },
        get: function () {
            return record.checked_out_file_path;
        }
    });		
	
	Object.defineProperty(this, "checkedInFromFilePath", {
        get: function () {
            return record.checked_in_from_file_path;
        }
    });		
	
	Object.defineProperty(this, "isStoredInDb", {
        get: function () {
            return utils.hasRecords(record.doc_revision_to_doc_document_binary);
        }
    });		
	
	Object.defineProperties(this, {
		"getUser": {
			enumerable: false
		},
		"getDocument": {
			enumerable: false
		},
		"getBytes": {
			enumerable: false
		},
		"getBytesFromDatabase": {
			enumerable: false
		},
		"getBytesFromFileSystem": {
			enumerable: false
		},
		"writeToFile": {
			enumerable: false
		}
	});
	
	Object.seal(this);	
}

/**
 * 
 * @param {Document} resultDoc
 * @param {plugins.file.JSFile} resultFile
 * @param {Number} error
 * 
 * @constructor 
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"4DD0CB8C-3446-47A3-AB8B-805413075000"}
 */
function UploadResult(resultDoc, resultFile, error) {
	
	/**
	 * @type {Document}
	 */
	this.document = resultDoc;
	
	/**
	 * @type {plugins.file.JSFile}
	 */
	this.file = resultFile;
	
	/**
	 * @type {Number}
	 */
	this.error = error;
	
	Object.freeze(this);
}

/**
 * Singleton that holds all allowed file types
 * 
 * @private 
 * @constructor 
 * 
 * @author patrick
 * @since 10.09.2012
 * 
 * @properties={typeid:24,uuid:"C5F3252F-9E08-42DA-8AEB-E16C1C5DE50D"}
 */
function AllowedFileTypes() {
	
	/** The allowed file types
	 * 
	 * @type {Array<AllowedFileType>} 
	 */
	this.types = new Array();
	
	/**
	 * Adds a new allowed file type to the list of allowed file types
	 * 
	 * If <code>isGlobal</code> is set to true, the new file type is applied to all organizations
	 * 
	 * @param {String} name
	 * @param {String} extension
	 * @param {Boolean} isGlobal
	 * 
	 * @return {AllowedFileType} createdType
	 */
	this.addFileType = function(name, extension, isGlobal) {
		if (!extension) {
			return null;
		}
		if (utils.stringLeft(extension,1) == ".") {
			extension = utils.stringMiddle(extension,2,extension.length);
		}
		var orgId = scopes.svySecurityManager.getOrganization().orgId.toString();
		/** @type {QBSelect<db:/svy_framework/doc_document_type>} */
		var fsQuery = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document_type");
		fsQuery.result.addPk();
		if (isGlobal) {
			fsQuery.where.add(fsQuery.columns.extension.eq(extension)).
				add(fsQuery.or.add(fsQuery.columns.organization_id.eq("00000000-0000-0000-0000-000000000000")).
				add(fsQuery.columns.organization_id.isNull));
		} else {
			fsQuery.where.add(fsQuery.columns.extension.eq(extension)).
				add(fsQuery.columns.organization_id.eq(orgId));
		}
		/** @type {JSFoundSet<db:/svy_framework/doc_document_type>} */
		var fsTypes = databaseManager.getFoundSet(fsQuery);
		var typeRecord;
		if (fsTypes && fsTypes.getSize() == 1) {
			typeRecord = fsTypes.getRecord(1);
		} else {
			typeRecord = fsTypes.getRecord(fsTypes.newRecord());
		}
		
		typeRecord.extension = extension;
		typeRecord.name = name;
		typeRecord.organization_id = isGlobal ? "00000000-0000-0000-0000-000000000000" : orgId;
		typeRecord.modification_date = application.getServerTimeStamp();
		
		if (databaseManager.saveData(typeRecord)) {
			var result = new AllowedFileType(typeRecord);
			return result;
		} else {
			return null;
		}
	}
	
	/**
	 * Removes the given file type from the type list either globally or the current organization
	 * 
	 * @param {String} extension
	 * @param {Boolean} isGlobal
	 * 
	 * @return {Boolean} success
	 */
	this.removeFileType = function(extension, isGlobal) {
		if (!extension) {
			return null;
		}
		if (utils.stringLeft(extension,1) == ".") {
			extension = utils.stringMiddle(extension,2,extension.length);
		}
		var orgId = scopes.svySecurityManager.getOrganization().orgId.toString();
		/** @type {QBSelect<db:/svy_framework/doc_document_type>} */
		var fsQuery = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document_type");
		fsQuery.result.addPk();
		if (isGlobal) {
			fsQuery.where.add(fsQuery.columns.extension.eq(extension)).
				add(fsQuery.or.add(fsQuery.columns.organization_id.eq("00000000-0000-0000-0000-000000000000")).
				add(fsQuery.columns.organization_id.isNull));
		} else {
			fsQuery.where.add(fsQuery.columns.extension.eq(extension)).
				add(fsQuery.columns.organization_id.eq(orgId));
		}
		/** @type {JSFoundSet<db:/svy_framework/doc_document_type>} */
		var fsTypes = databaseManager.getFoundSet(fsQuery);
		if (fsTypes && fsTypes.getSize() == 1) {
			if (!fsTypes.deleteRecord(1)) {
				return false;
			} else {
				return true;
			}
		} else {
			return true;
		}
	}
	
	/**
	 * Returns all allowed file extensions as a String array
	 * 
	 * @this {AllowedFileTypes}
	 * 
	 * @return {Array<String>} allowedTypes
	 * 
	 */
	this.getAllowedFileTypes = function() {
		/** @type {Array<String>} */
		var arr = new Array();
		
		// Return the filter array for document uploads
		if (ALLOW_ALL_FILE_TYPES) {
			return arr;
		}
		
		for (var i = 0; i < this.types.length ; i++) {
			var type = this.types[i];
			arr.push(type.type);
		}
		
		return arr;
	}
	
	/**
	 * Returns all globally set file types as AllowedFileType array
	 * 
	 * @this {AllowedFileTypes}
	 * 
	 * @return {Array<AllowedFileType>} globalFileTypes
	 */
	this.getGlobalAllowedTypes = function() {
		var result = this.types.filter(function(x) { return x.isGlobal });
		return result;
	}
	
	/**
	 * Returns all file types of the current organization as AllowedFileType array
	 * 
	 * @this {AllowedFileTypes}
	 * 
	 * @return {Array<AllowedFileType>} organizationFileTypes
	 */
	this.getOrganizationAllowedTypes = function() {
		var result = this.types.filter(function(x) { return !x.isGlobal });
		return result;
	}	
	
	Object.defineProperty(this, "types", {
		set: function(x) {
			
		},
		get: function() {
			var types = new Array();
			/** @type {QBSelect<db:/svy_framework/doc_document_type>} */
			var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document_type");
			query.result.addPk();
			query.where.add(query.or.
				add(query.columns.organization_id.eq(scopes.svySecurityManager.getOrganization().orgId.toString())).
				add(query.columns.organization_id.eq("00000000-0000-0000-0000-000000000000")).
				add(query.columns.organization_id.isNull));
			/** @type {JSFoundSet<db:/svy_framework/doc_document_type>} */
			var fs = databaseManager.getFoundSet(query);
			if (fs && utils.hasRecords(fs)) {
				for (var i = 1; i <= fs.getSize(); i++) {
					var typeRecord = fs.getRecord(i);
					types.push(new AllowedFileType(typeRecord));
				}
			}
			return types;
		}
	});
	
	Object.defineProperties(this, {
		"addFileType": {
			enumerable: false
		},
		"removeFileType": {
			enumerable: false
		},
		"getAllowedFileTypes": {
			enumerable: false
		},
		"getGlobalAllowedTypes": {
			enumerable: false
		},
		"getOrganizationAllowedTypes": {
			enumerable: false
		}
	});
	
	Object.seal(this);
}

/**
 * Allowed file type
 * 
 * @param {JSRecord<db:/svy_framework/doc_document_type>} record
 * 
 * @private 
 * @constructor 
 * 
 * @author patrick
 * @since 10.09.2012 
 *
 * @properties={typeid:24,uuid:"C9439CD9-8618-4510-B645-EC9AE6AB98AD"}
 */
function AllowedFileType(record) {
	
	if (!record || !(record instanceof JSRecord) || databaseManager.getDataSourceTableName(record.getDataSource()).toLowerCase() != "doc_document_type") {
		throw new scopes.modUtils$exceptions.IllegalArgumentException("AllowedFileType constructor requires a doc_document_type record");
	}
	
	/**
	 * The name (description) of this type
	 * 
	 * @type {String}
	 */
	this.name = record.name;
	
	/**
	 * The file type extension of this type
	 * 
	 * @type {String}
	 */
	this.type = record.extension;
	
	/**
	 * If true, the file type applies to all organizations
	 * 
	 * @type {Boolean}
	 */
	this.isGlobal = record.organization_id ? false : true;
	
	Object.defineProperty(this, "name", {
        set: function (x) {
        	record.name = x;
        	databaseManager.saveData(record);
        },
        get: function () {
            return record.name;
        }
    });
	
	Object.defineProperty(this, "type", {
        set: function (x) {
        	record.extension = x;
        	databaseManager.saveData(record);
        },
        get: function () {
            return record.extension;
        }
    });
	
	Object.defineProperty(this, "isGlobal", {
        set: function (x) {
        	if (x) {
        		record.organization_id = scopes.svySecurityManager.getOrganization().orgId;
        	} else {
        		record.organization_id = "00000000-0000-0000-0000-000000000000";
        	}
        	databaseManager.saveData(record);
        },
        get: function () {
            return (record.organization_id && record.organization_id.toString() != "00000000-0000-0000-0000-000000000000") ? false : true;
        }
    });	
	
	Object.seal(this);
}

/**
 * Trigger method for the FileWatcher scheduler
 * @private 
 * @properties={typeid:24,uuid:"DBC6723D-779B-41BC-895B-B7007575C3D7"}
 */
function checkFiles() {
	FILE_WATCHER.checkFiles();
}

/**
 * A file that is being watched for changes
 * 
 * @param {plugins.file.JSFile} file
 * @param {DocumentRevision} documentRevision
 * 
 * @constructor 
 * @private 
 * 
 * @author patrick
 * @since 08.09.2012
 *
 * @properties={typeid:24,uuid:"1E8C3697-ED45-4A1E-AC53-E23E3CBB9284"}
 */
function WatchedFile(file, documentRevision) {
	
	/**
	 * The file
	 * @type {plugins.file.JSFile}
	 */
	this.file = file;
	
	/**
	 * Last known modified date
	 * @type {Date}
	 */
	this.lastModified = file.lastModified();
	
	/**
	 * The DocumentRevision
	 * @type {DocumentRevision}
	 */
	this.documentRevision = documentRevision;
}

/**
 * Assigns a method to be called whenever a checked out file has been modified on disk<br>
 * 
 * <b>Important:</b> this only works in SmartClient!<br>
 * 
 * When the method is fired, it will receive a scopes.svyDocumentManagement.DocumentRevision object and the JSFile as argument
 * 
 * @param {Function} method
 * 
 * @author patrick
 * @since 08.09.2012
 * 
 * @deprecated Will be removed in version 5. Use {@link #scopes#svyDocumentManagement#addDocumentChangeListener} instead
 *
 * @properties={typeid:24,uuid:"AB10FE7F-108E-49DE-A35A-7F56D35EFFD1"}
 */
function setFileModifiedCallbackMethod(method) {
	if (application.getApplicationType() != APPLICATION_TYPES.WEB_CLIENT) {
		FILE_WATCHER.fileModifiedCallbackMethod = method;
	}
}

/**
 * Returns an Array of Document objects with all Documents currently checked out by the current user
 * 
 * @return {Array<Document>}
 * 
 * @author patrick
 * @since 06.09.2012 
 * 
 * @properties={typeid:24,uuid:"0CE9AA60-B563-46A0-964B-DB6460232E3D"}
 */
function getCheckedOutDocuments() {
	/** @type {QBSelect<db:/svy_framework/doc_document>} */	
	var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document");
	query.result.addPk();
	
	/** @type {QBJoin<db:/svy_framework/doc_revision>} */	
	var join = query.joins.add("db:/" + globals.nav_db_framework + "/doc_revision", JSRelation.INNER_JOIN);
	join.on.add(query.columns.doc_document_id.eq(join.columns.doc_document_id));
	
	query.where.add(query.columns.is_checked_out.eq(1));
	query.where.add(join.columns.checked_out_by_user.eq(scopes.svySecurityManager.getUser().userId));
	query.where.add(join.columns.checked_out_datetime.not.isNull);
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var fs = databaseManager.getFoundSet(query);
	
	/** @type {Array<Document>} */
	var result = new Array();
	
	if (fs && utils.hasRecords(fs)) {
		for (var d = 1; d <= fs.getSize(); d++) {
			var record = fs.getRecord(d);
			result.push(new Document(record));
		}
	}
	
	return result;
}

/**
 * Uploads the given files to the document management system.<p>
 * 
 * If no files are given, a file select dialog is shown (multiple  select).<p>
 * 
 * If the optional record is provided, the newly uploaded document is attached to the given record.<br>
 * If no record is given, the document will be attached to the current main record<p>
 * 
 * If a callback method is provided, that method receives an Array&lt;UploadResult&gt; containing<br>
 * UploadResult objects for each file uploaded. An UploadResult objects contains the Document<br>
 * object created, the original file uploaded and a possible error constant from the ERROR_CODE enumeration.
 * 
 * @param {Array<plugins.file.JSFile>} [files]
 * @param {JSRecord} [record]
 * @param {Function} [callbackMethod]
 *
 * @properties={typeid:24,uuid:"7DE3AB32-81FB-4BB7-B31D-91F5A3F934FA"}
 */
function uploadDocuments(files, record, callbackMethod) {
	if (!files) {
		uploadCallBackMethod = callbackMethod;
		uploadRecordToAttachTo = record;
		plugins.file.showFileOpenDialog(1, null, true, getFileTypeFilter(), uploadFiles, getMessageValue(I18N_KEYS.DIALOG_TITLE_UPLOAD));
	} else {
		uploadFiles(files, record, callbackMethod);
	}
}

/**
 * Uploads the given file to the document management system.<p>
 * 
 * If no file is given, a file select dialog is shown.<p>
 * 
 * If the optional record is provided, the newly uploaded document is attached to the given record.<br>
 * If no record is given, the document will be attached to the current main record<p>
 * 
 * If a callback method is provided, that method receives an Array&lt;UploadResult&gt; containing<br>
 * UploadResult objects for each file uploaded. An UploadResult objects contains the Document<br>
 * object created, the original file uploaded and a possible error constant from the ERROR_CODE enumeration.
 * 
 * @param {plugins.file.JSFile} [file]
 * @param {JSRecord} [record]
 * @param {Function} [callbackMethod]
 *
 * @properties={typeid:24,uuid:"74AD8C0F-9F18-47D8-817E-0144E7DB303D"}
 */
function uploadDocument(file, record, callbackMethod) {
	if (!file) {
		uploadCallBackMethod = callbackMethod;
		uploadRecordToAttachTo = record;
		plugins.file.showFileOpenDialog(1, null, false, getFileTypeFilter(), uploadFiles, getMessageValue(I18N_KEYS.DIALOG_TITLE_UPLOAD));
	} else {
		uploadFiles([file], record, callbackMethod);
	}
}

/**
 * Creates a document record, performs the upload and calls the callback method<p>
 * 
 * The callback method receives an Array&lt;UploadResult&gt; containing UploadResult objects<br>
 * for each file uploaded. An UploadResult objects contains the Document object created,<br>
 * the original file uploaded and a possible error constant from the ERROR_CODE enumeration.
 * 
 * @param {Array<plugins.file.JSFile>} files
 * @param {JSRecord} [recordToAttachTo]
 * @param {Function} [callbackMethod]
 * 
 * @private
 *
 * @properties={typeid:24,uuid:"A2D7DC60-D10D-41EE-9E00-7268B07ED261"}
 * @AllowToRunInFind
 */
function uploadFiles(files, recordToAttachTo, callbackMethod) {
	/** @type {Array<UploadResult>} */
	var uploadResult = new Array();
	
	// Check if any file is selected
	if (!files) {
		callbackMethod.apply(this, uploadResult);
		return;
	}
	
	if (!recordToAttachTo) {
		if (uploadRecordToAttachTo) {
			recordToAttachTo = uploadRecordToAttachTo;
			uploadRecordToAttachTo = null;
		} else {
			recordToAttachTo = forms[globals["nav_currentPanel1Form"]].foundset.getSelectedRecord();
		}
	}
	
	if (!recordToAttachTo) {
		return;
	}
	
	var linkedTable = databaseManager.getTable(recordToAttachTo).getSQLName().toLowerCase();
	var linkedId = recordToAttachTo.getPKs().join(",");
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */
	var docFs = databaseManager.getFoundSet("db:/" + globals.nav_db_framework + "/doc_document");
	
	var docRecord;
	
	// Copy files to Remote server machine
	for (var i = 0 ; i < files.length ; i++) {	
		
		var file = files[i];
		
		if (!ALLOW_ALL_FILE_TYPES && !isFileTypeAllowed(files[i].getName())) {
			// file type is not allowed
			uploadResult.push(new UploadResult(null, null, ERROR_CODES.FILE_TYPE_NOT_ALLOWED));
			continue;
		}
		
		docRecord = docFs.getRecord(docFs.newRecord());
		docRecord.linked_table = linkedTable;
		docRecord.linked_id = linkedId;
		docRecord.name = file.getName();
		docRecord.security_level = DOC_SECURITY.PUBLIC;
		docRecord.doc_document_type_id = getDocTypeId(file);
		docRecord.user_created_id = scopes.svySecurityManager.getUser().userId;
		docRecord.is_checked_out = 0;
		docRecord.content_type = file.getContentType();
		
		// TODO: what about the folder stuff!?
		
		// TODO: security!?
		
		databaseManager.saveData(docRecord);
		
		if (doUpload(docRecord, file)) {
			uploadResult.push(new UploadResult(new Document(docRecord), file, null));
		}
	}
	
	if (callbackMethod || uploadCallBackMethod) {
		if (!callbackMethod) {
			callbackMethod = uploadCallBackMethod;
			uploadCallBackMethod = null;
		}
		callbackMethod.apply(this, uploadResult);
	}
}

/**
 * Uploads the given file and creates revisions, thumbnails and binaries if needed
 * 
 * @param {JSRecord<db:/svy_framework/doc_document>} documentRecord
 * @param {plugins.file.JSFile} file
 * @param {String} [revisionReason]
 * 
 * @return {Boolean} success
 * 
 * @private
 *
 * @properties={typeid:24,uuid:"7E3A1CCE-D1B8-40B4-93B1-9992679400EF"}
 */
function doUpload(documentRecord, file, revisionReason) {
	/** @type {QBSelect<db:/svy_framework/doc_revision>} */
	var revisionQuery = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_revision");
	revisionQuery.result.addPk();
	revisionQuery.where.add(revisionQuery.columns.doc_document_id.eq(documentRecord.doc_document_id.toString()));
	var fsRevision = databaseManager.getFoundSet(revisionQuery);
	
	/** @type {JSRecord<db:/svy_framework/doc_revision>} */
	var revisionRecord;
	
	/** @type {JSRecord<db:/svy_framework/doc_document_binary>} */
	var binaryRecord;
	
	/** @type {JSRecord<db:/svy_framework/doc_document_thumbnail>} */
	var thumbnailRecord;	
	
	var fileToUpload = file;
	
	if (!fileToUpload.exists()) {
		return false;
	}
	
	// database
	if (STORE_REVISIONS || !utils.hasRecords(fsRevision)) {
		// create a new revision
		revisionRecord = fsRevision.getRecord(fsRevision.newRecord());
	} else {
		// use the one and only revision
		revisionRecord = fsRevision.getRecord(1);
		if (utils.hasRecords(revisionRecord.doc_revision_to_doc_document_binary)) {
			revisionRecord.doc_revision_to_doc_document_binary.deleteAllRecords();
		}
		if (utils.hasRecords(revisionRecord.doc_revision_to_doc_document_thumbnail)) {
			revisionRecord.doc_revision_to_doc_document_thumbnail.deleteAllRecords();
		}
	}
	
	revisionRecord.original_filename = documentRecord.name;
	revisionRecord.revision_filename = fileToUpload.getName();
	revisionRecord.doc_document_id = documentRecord.doc_document_id;
	revisionRecord.revision_datetime = new Date();
	revisionRecord.revision_by_user = scopes.svySecurityManager.getUser().userId;
	revisionRecord.organization_id = scopes.svySecurityManager.getOrganization().orgId;
	revisionRecord.revision_reason = revisionReason;
	revisionRecord.revision_content_type = fileToUpload.getContentType();
	revisionRecord.checked_in_from_file_path = scopes.modUtils$system.isWebClient() ? fileToUpload.getName() : fileToUpload.getAbsolutePath();
	databaseManager.saveData(revisionRecord);
	
	revisionRecord.revision_number = databaseManager.getFoundSetCount(fsRevision);
	databaseManager.saveData(revisionRecord);
	
	var bytes = fileToUpload.getBytes();
	
	if (STORE_DOCUMENTS_IN_DB) {
		// store binary
		binaryRecord = revisionRecord.doc_revision_to_doc_document_binary.getRecord(revisionRecord.doc_revision_to_doc_document_binary.newRecord());
		binaryRecord.doc_revision_id = revisionRecord.doc_revision_id;
		binaryRecord.modification_date = new Date();
		binaryRecord.document_binary = bytes;
		databaseManager.saveData(binaryRecord);			
	} else if (application.getApplicationType() == APPLICATION_TYPES.WEB_CLIENT) {
		// upload to file system from web client
		var serverFile = plugins.file.convertToJSFile(plugins.file.getDefaultUploadLocation() + getServerFileName(revisionRecord));
		if (!STORE_REVISIONS) {
			serverFile.deleteFile();
		}
		serverFile.getParentFile().mkdirs();
		serverFile.createNewFile();
		plugins.file.writeFile(serverFile, bytes, fileToUpload.getContentType());
	} else {
		// upload to file system from smart client
		var remoteJs = plugins.file.convertToRemoteJSFile(getServerFileName(revisionRecord));
		if (!STORE_REVISIONS) {
			remoteJs.deleteFile();
		}
		plugins.file.streamFilesToServer(fileToUpload, getServerFileName(revisionRecord));
	}
	
	// store thumbnail if applicable
	if (fileToUpload.getContentType() && fileToUpload.getContentType().split('/')[0] == "image" && plugins.images) {
		var image = plugins.images.getImage(bytes);
		if (image && image.getWidth() > 0 && image.getHeight() > 0) {
			image = image.resize(200, 200);
			thumbnailRecord = revisionRecord.doc_revision_to_doc_document_thumbnail.getRecord(revisionRecord.doc_revision_to_doc_document_thumbnail.newRecord());
			thumbnailRecord.doc_revision_id = revisionRecord.doc_revision_id;
			thumbnailRecord.modification_date = new Date();
			thumbnailRecord.document_thumbnail = image.getData();
			databaseManager.saveData(thumbnailRecord);
		}
	}
	
	// Reset checkedOut flag
	setCheckedOut(documentRecord, revisionRecord, false);
	
	return true;
}

/**
 * @param {Array<plugins.file.JSFile>} files
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"CFC280FC-2DB0-41D5-9E39-0C8543B4C116"}
 */
function doCheckin(files) {
	if (!files || files.length == 0) {
		return false;
	}
	var file = files[0];
	if (!file || !file.exists()) {
		checkinRevision = null;
		checkinRevisionReason = null;
		return false;
	}
	
	if (!ALLOW_ALL_FILE_TYPES && !isFileTypeAllowed(file.getName())) {
		// TODO: throw an error!? Show a message
		//globals.DIALOGS.showInfoDialog(i18n.getI18NMessage('i18n:svy.fr.dlg.document_checkin'), 
				// i18n.getI18NMessage('i18n:svy.fr.dlg.doc_type_not_supported'), i18n.getI18NMessage('i18n:svy.fr.lbl.ok'))
		checkinRevision = null;
		checkinRevisionReason = null;
		return false;
	}
	
	var lastRevision = checkinRevision;
	checkinRevision = null;
	
	var revisionDescription = checkinRevisionReason;
	checkinRevisionReason = null;
	
	var docId = lastRevision.getDocument().documentId;
	
	/** @type {QBSelect<db:/svy_framework/doc_document>} */	
	var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document");
	query.result.addPk();
	query.where.add(query.columns.doc_document_id.eq(docId.toString()));
	/** @type {JSFoundSet<db:/svy_framework/doc_document>} */	
	var fs = databaseManager.getFoundSet(query);
	
	if (fs && fs.getSize() == 1) {
		return doUpload(fs.getRecord(1), file, revisionDescription);
	} else {
		return false;
	}
}

/**
 * Checks if a given file is allowed
 * 
 * @param {String|plugins.file.JSFile} fileNameOrFile
 * 
 * @return {Boolean} documentTypeAllowed
 *
 * @properties={typeid:24,uuid:"F1096790-3675-490F-99F8-A463420C3CCD"}
 */
function isFileTypeAllowed(fileNameOrFile) {
	if (ALLOW_ALL_FILE_TYPES) {
		return true;
	}
	if (!fileNameOrFile) {
		return false;
	}
	if (fileNameOrFile instanceof plugins.file.JSFile) {
		/** @type {plugins.file.JSFile} */
		var jsFile = fileNameOrFile;
		fileNameOrFile = jsFile.getName();
	}
	var extension = getDocumentExtension(fileNameOrFile);
	/** @type {QBSelect<db:/svy_framework/doc_document_type>} */
	var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document_type");
	query.result.add(query.columns.doc_document_type_id.count);
	query.where.add(query.columns.extension.eq(extension));
	var ds = databaseManager.getDataSetByQuery(query, 1);
	if (ds && ds.getMaxRowIndex() == 1 && ds.getValue(1,1) == 1) {
		return true;
	} else {
		return false;
	}
}

/**
 * @param {String} docName
 * 
 * @return {String} extension
 * 
 * @private
 * 
 * @properties={typeid:24,uuid:"3F3AFE3C-9674-4E90-9295-2EBEE1106217"}
 */
function getDocumentExtension(docName) {
	var parts = docName.split('.');
	return parts[parts.length - 1].toLowerCase();
}

/**
 * Checks the given document back in<p>
 * 
 * If no file is given, the user will be presented with a file open dialog
 * 
 * @param {String|UUID|Document} documentOrDocumentId	- the ID of the document or a Document object
 * @param {plugins.file.JSFile|String} [file] 			- optional file or file path
 * @param {String} [revisionDescription] 				- optional description/reason for this revision
 * 
 * @return {Boolean}
 * 
 * @author patrick
 * @since 2013-02-18
 *
 * @properties={typeid:24,uuid:"51E8F4C9-B3C9-425D-A7D5-41736E0E0D72"}
 */
function checkinDocument(documentOrDocumentId, file, revisionDescription) {
	if (!documentOrDocumentId) {
		return null;
	}
	/** @type {Document} */
	var document;
	if (documentOrDocumentId instanceof String || documentOrDocumentId instanceof UUID) {
		document = getDocumentById(documentOrDocumentId);
	} else if (documentOrDocumentId instanceof Document) {
		document = documentOrDocumentId;
	} else {
		return null;
	}
	return document.checkin(file, revisionDescription);
}

/**
 * Checks out the given document document<p>
 * 
 * If no file is given, the user will be presented with a file save dialog
 * 
 * @param {String|UUID|Document} documentOrDocumentId	- the ID of the document or a Document object
 * @param {plugins.file.JSFile|String} [file] 			- optional file or file path
 * 
 * @return {Boolean}
 *
 * @properties={typeid:24,uuid:"0D2CE255-D71C-4E47-84EA-014784CA4BE3"}
 */
function checkoutDocument(documentOrDocumentId, file) {
	if (!documentOrDocumentId) {
		return null;
	}
	/** @type {Document} */
	var document;
	if (documentOrDocumentId instanceof String || documentOrDocumentId instanceof UUID) {
		document = getDocumentById(documentOrDocumentId);
	} else if (documentOrDocumentId instanceof Document) {
		document = documentOrDocumentId;
	} else {
		return null;
	}
	return document.checkout(file);
}

/**
 * @private 
 * 
 * @return {Array<String>} fileTypes
 *
 * @properties={typeid:24,uuid:"40DB39D6-AB87-4807-8B22-86B50526C07C"}
 */
function getFileTypeFilter() {
	var types = getAllowedFileTypes();
	if (types.length > 0) {
		types.unshift(getMessageValue(I18N_KEYS.ALLOWED_DOCUMENTS));
	}
	return types;
}

/**
 * Returns all file types that a user is allowed to upload to the document management system
 * 
 * @return {Array<String>} fileTypes
 * 
 * @author patrick
 * @since 10.09.2012
 * 
 * @properties={typeid:24,uuid:"D087CFB7-9638-48A7-9C37-871E0C35F84E"}
 */
function getAllowedFileTypes() {
	return ALLOWED_FILE_TYPES.getAllowedFileTypes();
}

/**
 * @param {JSRecord<db:/svy_framework/doc_revision>} revisionRec
 * 
 * @return {String} fileName
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"F236DCF7-DD6B-48DF-9DD0-B47F32D8E253"}
 */
function getServerFileName(revisionRec) {
	var nameParts = revisionRec.original_filename.split('.');
	var extension = nameParts[nameParts.length - 1];
	return "/" + scopes.svySecurityManager.getOrganization().orgId + '/' + revisionRec.doc_revision_id + '.' + extension;
}

/**
 * @param {plugins.file.JSFile} file
 * 
 * @private 
 * 
 * @author patick
 * @since 11.09.2012
 *
 * @properties={typeid:24,uuid:"E32726EA-6E8A-4D3E-B942-B9772D95C99C"}
 */
function getDocTypeId(file) {
	if (!file) {
		return null;
	}
	
	var extension = getDocumentExtension(file.getName());
	/** @type {QBSelect<db:/svy_framework/doc_document_type>} */
	var query = databaseManager.createSelect("db:/" + globals.nav_db_framework + "/doc_document_type");
	query.result.addPk();
	query.where.add(query.columns.extension.eq(extension));
	
	/** @type {JSFoundSet<db:/svy_framework/doc_document_type>} */
	var fs = databaseManager.getFoundSet(query);
	if (!fs || !utils.hasRecords(fs)) {
		return null;
	}
	var candidate = null;
	for (var i = 1; i <= fs.getSize(); i++) {
		candidate = fs.getRecord(i);
		if (!candidate.organization_id || candidate.organization_id == "00000000-0000-0000-0000-000000000000") {
			// prefer global version
			break;
		}
	}
	return candidate.doc_document_type_id;
}

/**
 * Marks this revision as checked out or not
 * 
 * @param {JSRecord<db:/svy_framework/doc_document>} docRecord
 * @param {JSRecord<db:/svy_framework/doc_revision>} revisionRecord
 * @param {Boolean} checkedOut
 * @param {plugins.file.JSFile} [file]
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"6220D170-D9DC-446C-8DC1-B61C9E6958FD"}
 */
function setCheckedOut(docRecord, revisionRecord, checkedOut, file) {
	if (docRecord) {
		docRecord.is_checked_out = checkedOut ? 1 : 0;
		databaseManager.saveData(docRecord);
	}
	if (revisionRecord) {
		revisionRecord.checked_out_by_user = checkedOut ? scopes.svySecurityManager.getUser().userId : null;
		revisionRecord.checked_out_datetime = checkedOut ? application.getServerTimeStamp() : null;
		if (!checkedOut) {
			revisionRecord.checked_out_file_path = null;
		} else if (checkedOut && file && file instanceof plugins.file.JSFile) {
			revisionRecord.checked_out_file_path = file.getAbsolutePath();
		} else if (checkedOut && file) {
			// in the webclient you only get the name of the file, so no JSFile
			revisionRecord.checked_out_file_path = file;
		}
		databaseManager.saveData(revisionRecord);
	}
}

/**
 * @param {String} messageKey
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"6C5300D8-F44B-46FA-AB7D-51BF09238A3B"}
 */
function getMessageValue(messageKey) {
	if (!messageKey) {
		return "";
	}
	var result = "";
	if (utils.stringLeft(messageKey.toLowerCase(),5) == "i18n:") {
		result = i18n.getI18NMessage(messageKey);
		if (utils.stringLeft(result,1) == "!") {
			// key not found
			return messageKey;
		} else {
			return result;
		}
	} else {
		// not i18n
		return messageKey;
	}
}

/**
 * Thrown when a document could not be checked out
 * 
 * @param {DocumentRevision} documentRevision
 * @param {String} message
 * 
 * @constructor
 * 
 * @extends {scopes.modUtils$exceptions.IllegalStateException}
 *
 * @properties={typeid:24,uuid:"9718A622-83F1-4E84-911B-298817DA63FF"}
 */
function DocumentCheckOutException(documentRevision, message) {
	/**
	 * The document revision where the problem occured
	 * @type {DocumentRevision}
	 */
	this.documentRevision = documentRevision;
	
	scopes.modUtils$exceptions.IllegalStateException.call(this, message);
}

/**
 * Thrown when a document is already checked out by another user
 * 
 * @param {DocumentRevision} documentRevision
 * @param {String} message
 * 
 * @constructor
 * 
 * @extends {scopes.modUtils$exceptions.IllegalStateException}
 *
 * @properties={typeid:24,uuid:"A5BEDF5E-52B0-4825-9EA4-3C59658611DB"}
 */
function DocumentCheckedOutByOtherUserException(documentRevision, message) {
	/**
	 * The document revision where the problem occured
	 * @type {DocumentRevision}
	 */
	this.documentRevision = documentRevision;
	
	scopes.modUtils$exceptions.IllegalStateException.call(this, message);
}

/**
 * @param {scopes.svyProperties.Property} property
 * @param {scopes.svyProperties.RuntimeProperty} runtimeProperty
 * 
 * @private 
 *
 * @properties={typeid:24,uuid:"64038C43-4B5F-4983-9BF6-A76B99D3E5EE"}
 */
function propertyChanged(property, runtimeProperty) {
	if (property.name == "document_management_allow_all_file_types") {
		ALLOW_ALL_FILE_TYPES = runtimeProperty.value ? true : false;
	} else if (property.name == "document_management_in_database") {
		STORE_DOCUMENTS_IN_DB = runtimeProperty.value ? true : false;
	} else if (property.name == "document_management_revision") {
		STORE_REVISIONS = runtimeProperty.value ? true : false;
	} else if (property.name == "document_management_tracked_checkout") {
		USE_TRACKED_CHECKOUT = runtimeProperty.value ? true : false;
	}
}

/**
 * Adds a listener that is notified whenever a checked out document is changed/saved<p>
 * 
 * The method fired will receive the documentRevision and the checked out JSFile as arguments
 * 
 * @param {Function} action
 * 
 * @author patrick
 * @since 25.10.2012
 * 
 * @properties={typeid:24,uuid:"E3503F54-8ED5-475A-AA3B-EC0DC98A3FF0"}
 */
function addDocumentChangeListener(action) {
	scopes.modUtils$eventManager.addListener(this, DOCUMENT_CHANGED_EVENT_ACTION, action);
}

/**
 * Set exception prototypes to super class
 * 
 * @protected  
 * 
 * @properties={typeid:35,uuid:"A6EE49EF-C0AD-46EC-A15D-EE62D0F65044",variableType:-4}
 */
var init = function() {
	DocumentCheckOutException.prototype = new scopes.modUtils$exceptions.IllegalStateException("Document checkout failed");
	DocumentCheckedOutByOtherUserException.prototype = new scopes.modUtils$exceptions.IllegalStateException("Document checkout failed");
	scopes.svyProperties.addPropertyChangeListener(propertyChanged);
}();
