package com.navigationhybrid.androidnavigation;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;

/**
 * Created by Listen on 2018/1/11.
 */

public class TabBarItem implements Parcelable {

    public String title;

    public Bundle icon;

    public boolean hideTabBarWhenPush;

    public TabBarItem(Bundle icon, String title, boolean hideTabBarWhenPush) {
        this.icon = icon;
        this.title = title;
        this.hideTabBarWhenPush = hideTabBarWhenPush;
    }

    @Override
    public int describeContents() {
        return 0;
    }

    @Override
    public void writeToParcel(Parcel dest, int flags) {
        dest.writeString(this.title);
        dest.writeBundle(this.icon);
        dest.writeByte(this.hideTabBarWhenPush ? (byte) 1 : (byte) 0);
    }

    protected TabBarItem(Parcel in) {
        this.title = in.readString();
        this.icon = in.readBundle(getClass().getClassLoader());
        this.hideTabBarWhenPush = in.readByte() != 0;
    }

    public static final Creator<TabBarItem> CREATOR = new Creator<TabBarItem>() {
        @Override
        public TabBarItem createFromParcel(Parcel source) {
            return new TabBarItem(source);
        }

        @Override
        public TabBarItem[] newArray(int size) {
            return new TabBarItem[size];
        }
    };
}