/**
 * 
 */
package com.p2programs.sts.plugins.fabsuite;

import com.servoy.j2db.scripting.IScriptable;
import com.sun.jna.Library;
import com.sun.jna.Native;
import com.sun.jna.NativeLibrary;

/**
 * @author Alienware
 *
 */
public class FabSuitePluginProvider implements IScriptable {
	public interface fsLib extends Library {
		String _FabSuiteXML(String xmlRequest);
	}
	
	public String js_fsXML2(String args) {
		System.setProperty("jna.debug_load", "true");
        //System.setProperty("jna.library.path", "c:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\");
        //System.setProperty("java.library.path", "c:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\");
        //System.setProperty("java.class.path", "c:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\");
        NativeLibrary.addSearchPath("FabSuiteSTS", "c:\\Program Files (x86)\\FabSuite LLC\\FabSuite\\");
		//String xmlReq = "<FabSuiteXMLRequest><Connect><IPAddress>localhost</IPAddress><PortNumber>3306</PortNumber><Username>admin</Username><Password>fab</Password></Connect></FabSuiteXMLRequest>";
		String xmlReq = args;
		String fabLib = "FabSuiteSTS";
		//String fabLib = "FabSuiteXMLInterface";
		String outputX = "No Response.";
		try {
			
			System.loadLibrary("FabSuiteSTS");
			fsLib lib = (fsLib) Native.loadLibrary(fabLib, fsLib.class);
			//outputX = fsLib.class.toString();
			outputX = lib._FabSuiteXML(xmlReq);

		} catch (Exception e){
			outputX = e.getMessage();

		} catch (Error m){
			outputX = "Error "+ m.getMessage()+ " " + m.toString();
		}
		return outputX;	
		//System.out.println(outputX);
	}

	/* (non-Javadoc)
	 * @see com.servoy.j2db.scripting.IReturnedTypesProvider#getAllReturnedTypes()
	 */
	public Class<?>[] getAllReturnedTypes() {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.servoy.j2db.scripting.IScriptObject#getParameterNames(java.lang.String)
	 */
	public String[] getParameterNames(String arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.servoy.j2db.scripting.IScriptObject#getSample(java.lang.String)
	 */
	public String getSample(String arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.servoy.j2db.scripting.IScriptObject#getToolTip(java.lang.String)
	 */
	public String getToolTip(String arg0) {
		// TODO Auto-generated method stub
		return null;
	}

	/* (non-Javadoc)
	 * @see com.servoy.j2db.scripting.IScriptObject#isDeprecated(java.lang.String)
	 */
	public boolean isDeprecated(String arg0) {
		// TODO Auto-generated method stub
		return false;
	}

}
