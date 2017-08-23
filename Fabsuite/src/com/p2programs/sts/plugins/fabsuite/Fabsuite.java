package com.p2programs.sts.plugins.fabsuite;

import java.beans.PropertyChangeEvent;
import java.net.URL;
import java.util.Properties;


import javax.swing.Icon;
import javax.swing.ImageIcon;

import com.servoy.j2db.plugins.IClientPlugin;
import com.servoy.j2db.plugins.IClientPluginAccess;
import com.servoy.j2db.plugins.PluginException;
import com.servoy.j2db.scripting.IScriptable;

public class Fabsuite implements IClientPlugin {
	private FabSuitePluginProvider provider;

	public Properties getProperties() {
		Properties props = new Properties();
		props.put(DISPLAY_NAME, getName());
		return props;
	}

	public void load() throws PluginException {
		// TODO Auto-generated method stub

	}

	public void unload() throws PluginException {
		provider = null;
	}

	public void propertyChange(PropertyChangeEvent evt) {
		// TODO Auto-generated method stub

	}

	public IScriptable getScriptObject() {
		System.setProperty("jna.library.path", "c:\\STS3");
		if (provider == null) {
			provider = new FabSuitePluginProvider();
		} 
		return provider;
	}

	public Icon getImage() {
		URL iconUrl = getClass().getResource("images/fabsuite_logo.png");
		if (iconUrl != null) {
			return new ImageIcon(iconUrl);
		} else {
			return null;
		}
	}

	public String getName() {
		return "fabsuite";
	}

	public void initialize(IClientPluginAccess arg0) throws PluginException {
		// TODO Auto-generated method stub

	}

}
