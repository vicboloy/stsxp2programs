/**
 * @author patrick
 * @since 14.09.2012
 *
 * @properties={type:4,typeid:36,uuid:"696912F2-9DEB-4781-837A-649098ADD158"}
 */
function max_revision_number()
{
	if (utils.hasRecords(doc_document_to_doc_revision)) {
		return doc_document_to_doc_revision.latest_revision_number;
	} else {
		return null;
	}
}

/**
 * @properties={type:12,typeid:36,uuid:"FFFAFEF2-AEB2-4F0D-8A4D-9B4AE4777683"}
 * @AllowToRunInFind
 */
function latest_revision_id()
{
	if (utils.hasRecords(doc_document_to_doc_revision$latest_revision)) {
		return doc_document_to_doc_revision$latest_revision.doc_revision_id;
	} else {
		return null;
	}
}
